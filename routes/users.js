const express = require("express");

const usersControler = require("../controllers/usersController");

const {
  verifyToken,
  isAdm,
  userIsAdmOrHimself,
} = require("../middlewares/auth.js");
const router = express.Router();

router.get("/install", usersControler.createInitialAdm);

router.get("/", usersControler.getUsers);
router.get("/:id", usersControler.getUserById);

router.post("/registerUser", usersControler.createUser);
router.post("/registerAdm", verifyToken, isAdm, usersControler.createUserAdm);
router.post("/login", usersControler.verifyUser);

router.put(
  "/updateUser",
  verifyToken,
  userIsAdmOrHimself,
  usersControler.updateUser
);
router.put("/updateAdm", verifyToken, isAdm, usersControler.updateUserAdm);

router.delete("/:id", verifyToken, isAdm, usersControler.deleteUser);

module.exports = router;
