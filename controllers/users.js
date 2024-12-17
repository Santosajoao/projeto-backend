const { users, getNewId } = require("../data/database.js");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyUser = (req, res) => {
  const { user, password } = req.body; // Extrai o usuário e a senha do corpo da requisição
  const userLogin = users.find(
    (u) => u.user === user && u.password === password
  );

  if (!userLogin) {
     // Se não encontrar, retorna erro de autenticação
    return res
      .status(401)
      .json({ message: "Usuário ou senha inválida, tente novamente" });
  } else {
    // Se encontrar, gera um token JWT
    const token = jwt.sign(
      { id: userLogin.id, isAdm: userLogin.isAdm },
      process.env.JWT_SECRET, // Chave secreta para assinatura
      { expiresIn: "1 hr" } // Define a expiração do token
    );
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ message: "Logado", token });
  }
};

const getUsers = (req, res) => { // Função para retornar usuários paginados
  const { page = 1 } = req.query;
  const limit = parseInt(req.query.limit, 5) || 10;
  return paginate(users, page, limit, res);
};

const getUserById = (req, res) => { // Função para retornar um usuário específico
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.status(200).json(user);
};

const createInitialAdm = (req, res) => { // Função para criar o usuário administrador inicial
  const existingAdmin = users.find(
    (user) => user.isAdm === true && user.name === "Administrator"
  );

  if (existingAdmin) {
    return res
      .status(400)
      .json({ message: "Já existe o usuário Administrator no sistema." });
  }

  const initialAdm = new User(
    getNewId(),
    "Administrator",
    "adm@gmail.com",
    "admin",
    "admin",
    true
  );
  users.push(initialAdm);
  res.status(200).json(initialAdm);
};

const createUser = (req, res) => { // Função para criar um usuário
  const newUser = new User(req.body);
  if (!req.body.name || !req.body.email || !req.body.user || !req.body.password) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios" });
  }

  newUser.id = getNewId(users);
  newUser.isAdm = false;
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.user = req.body.user;
  newUser.password = req.body.password;
  users.push(newUser);
  res.status(201).json(newUser);
};

const createUserAdm = (req, res) => { // Função para criar um usuário administrador
  const newUser = req.body;

  if (!newUser.name || !newUser.email || !newUser.user || !newUser.password) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios" });
  } else {
    const userCreated = new User(
      getNewId(),
      newUser.name,
      newUser.email,
      newUser.user,
      newUser.password,
      true
    );
    users.push(userCreated);
    res.status(200).json(userCreated);
  }
};

const updateUser = (req, res) => { // Função para atualizar um usuário
  const userId = parseInt(req.body.id, 10);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const updatedUser = { ...users[userIndex], ...req.body };
  users[userIndex] = updatedUser;
  res.status(200).json(updatedUser);
};

const updateUserAdm = (req, res) => { // Função para atualizar um usuário administrador
  const userId = parseInt(req.body.id, 10);
  const userToBeUpdated = users.find((u) => u.id === userId);

  if (!userToBeUpdated) {
    return res.status(404).json({ message: "Usuário não existente" });
  }

  const properties = ["name", "email", "user", "password"];
  Object.keys(req.body).forEach((key) => {
    if (properties.includes(key)) {
      userToBeUpdated[key] = req.body[key];
    }
  });

  res.status(200).json(userToBeUpdated);
};

const deleteUser = (req, res) => { // Função para deletar um usuário
  const userId = parseInt(req.params.id, 10);
  const userIndex = users.findIndex((u) => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  const [deletedUser] = users.splice(userIndex, 1);
  res.status(200).json(deletedUser);
};

const paginate = (database, page, limit, res) => { // Função para paginar os usuários
  if (![5, 10, 30].includes(limit)) {
    return res
      .status(400)
      .json({ message: "O parâmetro limit deve ser 5, 10 ou 30" });
  }

  const quantityUsers = database.length;

  if (quantityUsers > 0) {
    const sortedData = database.sort((a, b) => a.id - b.id);
    const lastPage = Math.ceil(quantityUsers / limit);

    if (page < 1 || page > lastPage) {
      return res.status(400).json({ message: "Página inválida" });
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const usersPage = sortedData.slice(startIndex, endIndex);

    return res.status(200).json({
      usersPage,
      page,
      lastPage,
      limit,
    });
  } else {
    return res.status(400).json({ message: "Nenhum usuário encontrado" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createInitialAdm,
  createUser,
  createUserAdm,
  verifyUser,
  updateUser,
  updateUserAdm,
  deleteUser,
  paginate,
};
