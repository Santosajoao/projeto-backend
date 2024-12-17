const { planets, getNewId } = require('../data/databasePlanets');
const Planet = require('../models/Planet');

const getPlanets = (req, res) => { // Função para retornar planetas paginados
  const { page = 1 } = req.query;
  const limit = parseInt(req.query.limit, 5) || 10;
  return paginate(planets, page, limit, res);
};

const getPlanetByName = (req, res) => { // Função para retornar um planeta específico
  const planetName = req.params.name;
  const planet = planets.find(p => p.name.toLowerCase().trim() == planetName.toLowerCase().trim());

  if (!planet) {
    return res.status(404).json({ message: "Planeta não encontrado" });
  }

  res.status(200).json(planet);
};

const getPlanetsByTerrain = (req, res) => { // Função para retornar planetas por terreno
  const terrain = req.params.terrain;
  const filteredPlanets = planets.filter(
    (p) => p.terrain.toLowerCase().trim() === terrain.toLowerCase().trim()
  );

  if (filteredPlanets.length === 0) {
    return res
      .status(404)
      .json({
        message: "Nenhum planeta encontrado com o terreno informado",
      });
  }

  const { page = 1 } = req.query;
  const limit = parseInt(req.query.limit, 10) || 5;
  return paginate(filteredPlanets, page, limit, res);
};

const registerPlanet = (req, res) => { // Função para criar um planeta
  const newPlanet = new Planet(req.body);
  newPlanet.id = getNewId(planets);
  newPlanet.name = req.body.name;
  newPlanet.climate = req.body.climate;
  newPlanet.terrain = req.body.terrain;
  newPlanet.population = req.body.population;
  planets.push(newPlanet);
  res.status(201).json(newPlanet);
};

const updatePlanet = (req, res) => { // Função para atualizar um planeta
  const planetId = parseInt(req.params.id, 10);
  const planetIndex = planets.findIndex(p => p.id === planetId);

  if (planetIndex === -1) {
    return res.status(404).json({ message: "Planeta não encontrado" });
  }

  const updatedPlanet = { ...planets[planetIndex], ...req.body };
  planets[planetIndex] = updatedPlanet;
  res.status(200).json(updatedPlanet);
};

const deletePlanet = (req, res) => { // Função para deletar um planeta
  const planetId = parseInt(req.params.id, 10);
  const planetIndex = planets.findIndex(p => p.id === planetId);

  if (planetIndex === -1) {
    return res.status(404).json({ message: "Planeta não encontrado" });
  }

  const [deletedPlanet] = planets.splice(planetIndex, 1);
  res.status(200).json({message: "Planeta deletado", deletedPlanet,});
};

const paginate = (database, page, limit, res) => { // Função para paginar os planetas
  if (![5, 10, 30].includes(limit)) {
    return res.status(400).json({ message: "O parâmetro limit deve ser 5, 10 ou 30" });
  }

  const quantityPlanets = database.length;

  if (quantityPlanets > 0) {
    const planetsSortedById = database.sort((a, b) => a.id - b.id);
    const lastPage = Math.ceil(quantityPlanets / limit);

    if (page < 1 || page > lastPage) {
      return res.status(400).json({ message: "Página inválida" });
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const planetsPage = planetsSortedById.slice(startIndex, endIndex);

    return res.status(200).json({
      planetsPage,
      page,
      lastPage,
      limit,
    });
  } else {
    return res.status(400).json({ message: "Nenhum planeta encontrado" });
  }
};

module.exports = {
  getPlanets,
  getPlanetByName,
  getPlanetsByTerrain,
  registerPlanet,
  updatePlanet,
  deletePlanet,
  paginate,
};
