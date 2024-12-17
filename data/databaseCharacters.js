const Character = require("../models/Character");

let characters = [
  new Character(1, "Luke Skywalker", "male", "1.82"),
  new Character(2, "C-3PO", "na", "1.67"),
  new Character(3, "R2-D2", "na", "1.96"),
  new Character(4, "Darth Vader", "male", "2.02"),
  new Character(5, "Leia Organa", "female", "1.50"),
  new Character(6, "Han Solo", "male", "1.80"),
  new Character(7, "Chewbacca", "male", "2.28"),
  new Character(8, "Yoda", "male", "0.66"),
  new Character(9, "Padmé Amidala", "female", "1.65"),
  new Character(10, "Obi-Wan Kenobi", "male", "1.82"),
  new Character(11, "Anakin Skywalker", "male", "1.88"),
  new Character(12, "Mace Windu", "male", "1.88"),
  new Character(13, "Emperor Palpatine", "male", "1.70"),
  new Character(14, "Lando Calrissian", "male", "1.77"),
  new Character(15, "Boba Fett", "male", "1.83"),
  new Character(16, "Darth Maul", "male", "1.75"),
  new Character(17, "Rey", "female", "1.70"),
  new Character(18, "Finn", "male", "1.78"),
  new Character(19, "Poe Dameron", "male", "1.76"),
  new Character(20, "Kylo Ren", "male", "1.89"),
  new Character(21, "BB-8", "na", "0.67"),
  new Character(22, "Rose Tico", "female", "1.66"),
  new Character(23, "General Hux", "male", "1.85"),
  new Character(24, "Captain Phasma", "female", "1.91"),
  new Character(25, "Snoke", "male", "2.13"),
  new Character(26, "Jyn Erso", "female", "1.62"),
  new Character(27, "Cassian Andor", "male", "1.78"),
  new Character(28, "K-2SO", "na", "2.16"),
  new Character(29, "Galen Erso", "male", "1.83"),
  new Character(30, "Saw Gerrera", "male", "1.83"),
];

const getNewId = () => {
  const ids = characters.map((character) => character.id);
  const maxId = Math.max(...ids) + 1;

  return maxId;
};

module.exports = { characters, getNewId };
