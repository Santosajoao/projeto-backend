const express = require("express");

const { verifyToken, typeOfUser } = require("../middleware/auth.js");
const router = express.Router();
const charactersController = require("../controllers/characters.js");

router.get("/", verifyToken, charactersController.getCharacters);
router.get("/:name", verifyToken, charactersController.getCharacterByName);
router.get("/gender/:gender", verifyToken, charactersController.getCharactersByGender);

router.post("/registerCharacter", verifyToken, typeOfUser, charactersController.registerCharacter);

router.put("/:id", verifyToken, typeOfUser, charactersController.updateCharacter);

router.delete("/:id", verifyToken, typeOfUser, charactersController.deleteCharacter);

module.exports = router;
