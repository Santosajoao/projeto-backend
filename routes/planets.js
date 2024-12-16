const express = require("express");

const { verifyToken, isAdm } = require("../middlewares/auth.js");
const router = express.Router();
const planetsController = require("../controllers/planets.js");

router.get("/", verifyToken, planetsController.getPlanets);
router.get("/:name", verifyToken, planetsController.getPlanetsByName);
router.get("/:terrain", verifyToken, planetsController.getPlanetsByTerrain);

router.post("/registerPlanet", verifyToken, isAdm, planetsController.registerPlanet);

router.put("/:id", verifyToken, isAdm, planetsController.updatePlanet);

router.delete("/:id", verifyToken, isAdm, planetsController.deletePlanet);

module.exports = router;
