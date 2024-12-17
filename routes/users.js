const express = require("express");

const usersControler = require("../controllers/users.js");

const { verifyToken, typeOfUser } = require("../middleware/auth.js");
const router = express.Router();

router.get("/install", usersControler.createInitialAdm);

router.get("/", usersControler.getUsers);
router.get("/:id", usersControler.getUserById);

router.post("/registerUser", usersControler.createUser);
router.post("/registerAdm", verifyToken, typeOfUser, usersControler.createUserAdm);
router.post("/login", usersControler.verifyUser);

router.put("/updateUser", verifyToken, typeOfUser, usersControler.updateUser);
router.put("/updateAdm", verifyToken, typeOfUser, usersControler.updateUserAdm);
router.delete("/:id", verifyToken, typeOfUser, usersControler.deleteUser);

module.exports = router;
