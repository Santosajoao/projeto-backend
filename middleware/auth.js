const jwt = require("jsonwebtoken");
const secretKey = "teste";

const verifyToken = async (req, res, next) => { // Função para verificar o token
  try {
    let token = req.headers["authorization"];
    
    if (!token) { // Verifica se o token foi fornecido
      return res.status(401).json({ message: "Token não fornecido" });
    }

    token = token.split(" "); // Divide o token em duas partes

    if (token[0] == "Bearer") {// Verifica se a primeira parte é Bearer
      token = token[1]; // Pega a segunda parte
    } 
    else {
      return res.status(401).json({ message: "Token não fornecido" });
    }
    
    const decoded = jwt.verify(token, secretKey); // Verifica se o token é válido
    req.user = decoded;
    next();
  } catch (err) {// Caso o token seja inválido
    res.status(401).json({ message: "Acesso negado" });
  }
};

const typeOfUser = (req, res, next) => { // Função para verificar se o usuário é administrador ou ele mesmo
  const { id: idUserToBeUpdated } = req.body;
  const { id: idUserMakingUpdate, isAdm } = req.user;

  if (!isAdm && idUserToBeUpdated !== idUserMakingUpdate) {
    return res.status(403).json({
      message: "Acesso negado: apenas administradores podem realizar a ação",
    });
  }

  next();
};

const urlNotValid = (req, res) => {
  res.status(404).json({ message: "Rota não existente" });
};

module.exports = { verifyToken, typeOfUser, urlNotValid };
