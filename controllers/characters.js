const { characters, getNewId } = require("../data/databaseCharacters");
const Character = require("../models/Character");

const getCharacters = (req, res) => { // Função para retornar personagens paginados
  const { page = 1 } = req.query;
  const limit = parseInt(req.query, 5) || 10;
  return paginate(characters, page, limit, res);
};

const getCharacterByName = (req, res) => { // Função para retornar um personagem específico
  const characterName = req.params.name;
  const character = characters.find(
    (c) => c.name.toLowerCase().trim() === characterName.toLowerCase().trim()
  );

  if (!character) {
    return res.status(404).json({ message: "Personagem não encontrado" });
  }

  res.status(200).json(character);
};

const getCharactersByGender = (req, res) => { // Função para retornar personagens por gênero
  const gender = req.params.gender;
  const filteredCharacters = characters.filter(
    (c) => c.gender.toLowerCase().trim() === gender.toLowerCase().trim()
  );

  if (filteredCharacters.length === 0) {
    return res.status(404).json({
      message: "Nenhum personagem encontrado com o gênero especificado",
    });
  }

  const { page = 1 } = req.query;
  const limit = parseInt(req.query.limit, 10) || 5;
  return paginate(filteredCharacters, page, limit, res);
};

const registerCharacter = (req, res) => { // Função para criar um personagem
  const newCharacter = new Character(req.body);
  newCharacter.id = getNewId(characters);
  newCharacter.name = req.body.name;
  newCharacter.gender = req.body.gender;
  newCharacter.height = req.body.height;
  characters.push(newCharacter);
  res.status(201).json(newCharacter);
};

const updateCharacter = (req, res) => { // Função para atualizar um personagem
  const characterId = parseInt(req.params.id, 10);
  const characterIndex = characters.findIndex((c) => c.id === characterId);

  if (characterIndex === -1) {
    return res.status(404).json({ message: "Personagem não encontrado" });
  }

  const updatedCharacter = { ...characters[characterIndex], ...req.body };
  characters[characterIndex] = updatedCharacter;
  res.status(200).json(updatedCharacter);
};

const deleteCharacter = (req, res) => { // Função para deletar um personagem
  const characterId = parseInt(req.params.id, 10);
  const characterIndex = characters.findIndex((c) => c.id === characterId);

  if (characterIndex === -1) {
    return res.status(404).json({ message: "Personagem não encontrado" });
  }

  const [deletedCharacter] = characters.splice(characterIndex, 1);
  res.status(200).json({message: "Personagem deletado", deletedCharacter,});
};

const paginate = (database, page, limit, res) => { // Função para paginar os personagens
  if (![5, 10, 30].includes(limit)) {
    return res
      .status(400)
      .json({ message: "O parâmetro limit deve ser 5, 10 ou 30" });
  }

  const totalItems = database.length;

  if (totalItems > 0) {
    const sortedData = database.sort((a, b) => a.id - b.id);
    const lastPage = Math.ceil(totalItems / limit);

    if (page < 1 || page > lastPage) {
      return res.status(400).json({ message: "Página inválida" });
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedData = sortedData.slice(startIndex, endIndex);

    return res.status(200).json({
      data: paginatedData,
      page,
      lastPage,
      limit,
    });
  } else {
    return res.status(400).json({ message: "Nenhum registro encontrado" });
  }
};

module.exports = {
  getCharacters,
  getCharacterByName,
  getCharactersByGender,
  registerCharacter,
  updateCharacter,
  deleteCharacter,
  paginate,
};
