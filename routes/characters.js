const express = require("express");

const { verifyToken, isAdm } = require("../middlewares/auth.js");
const router = express.Router();
const charactersController = require("../controllers/characters.js");

router.get("/", verifyToken, charactersController.getCities);
router.get("/:name", verifyToken, charactersController.getcharactersByName);
router.get("/:gender", verifyToken, charactersController.getcharactersByGender);

router.post(
  "/registerCharacter",
  verifyToken,
  isAdm,
  charactersController.registerCharacter
);

router.put("/:id", verifyToken, isAdm, charactersController.updateCharacter);

router.delete("/:id", verifyToken, isAdm, charactersController.deleteCharacter);

module.exports = router;
