const express = require("express");

const { verifyToken, typeOfUser } = require("../middleware/auth.js");
const router = express.Router();
const planetsController = require("../controllers/planets.js");

router.get("/", verifyToken, planetsController.getPlanets);
router.get("/:name", verifyToken, planetsController.getPlanetByName);
router.get("/terrain/:terrain", verifyToken, planetsController.getPlanetsByTerrain);

router.post("/registerPlanet", verifyToken, typeOfUser, planetsController.registerPlanet);

router.put("/:id", verifyToken, typeOfUser, planetsController.updatePlanet);

router.delete("/:id", verifyToken, typeOfUser, planetsController.deletePlanet);

module.exports = router;
