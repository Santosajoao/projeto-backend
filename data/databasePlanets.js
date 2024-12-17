const Planet = require('../models/Planet')

let planets = [
    new Planet(1, 'Tatooine', 'arid', 'desert', '200000'),
    new Planet(2, 'Alderaan', 'temperate', 'grasslands, mountains', '2000000000'),
    new Planet(3, 'Yavin IV', 'temperate, tropical', 'jungle, rainforests', '1000'),
    new Planet(4, 'Hoth', 'frozen', 'tundra, ice caves, mountain ranges', 'unknown'),
    new Planet(5, 'Dagobah', 'murky', 'swamp, jungles', 'unknown'),
    new Planet(6, 'Bespin', 'temperate', 'gas giant', '6000000'),
    new Planet(7, 'Endor', 'temperate', 'forests, mountains, lakes', '30000000'),
    new Planet(8, 'Naboo', 'temperate', 'grassy hills, swamps, forests, mountains', '4500000000'),
    new Planet(9, 'Coruscant', 'temperate', 'cityscape, mountains', '1000000000000'),
    new Planet(10, 'Kamino', 'temperate', 'ocean', '1000000000'),
    new Planet(11, 'Geonosis', 'temperate, arid', 'rock, desert, mountain', '100000000'),
    new Planet(12, 'Mustafar', 'hot', 'volcanoes, lava rivers, mountains', '20000'),
    new Planet(13, 'Kashyyyk', 'tropical', 'forests, jungles', '45000000'),
    new Planet(14, 'Polis Massa', 'artificial temperate', 'asteroid', '1000000'),
    new Planet(15, 'Utapau', 'arid, temperate', 'sinkholes, plains', '95000000'),
    new Planet(16, 'Jakku', 'hot', 'deserts', 'unknown'),
    new Planet(17, 'Dantooine', 'temperate', 'grasslands, savannas', '1000000'),
    new Planet(18, 'Ilum', 'frozen', 'ice, mountains', 'unknown'),
    new Planet(19, 'Lothal', 'temperate', 'grasslands, plains, urban', '1500000'),
    new Planet(20, 'Scarif', 'tropical', 'beaches, islands, oceans', 'unknown'),
    new Planet(21, 'Jedha', 'cold', 'deserts', 'unknown'),
    new Planet(22, 'Ahch-To', 'temperate', 'islands, oceans', 'unknown'),
    new Planet(23, 'Crait', 'cold', 'salt flats, mountains', 'unknown'),
    new Planet(24, 'Corellia', 'temperate', 'urban, industrial', '3000000000'),
    new Planet(25, 'Mandalore', 'temperate', 'urban, forests', '4000000'),
    new Planet(26, 'Ryloth', 'temperate, arid', 'mountains, valleys, caves', '1500000'),
    new Planet(27, 'Sullust', 'hot', 'volcanoes, lava rivers', '18500000'),
    new Planet(28, 'Mon Cala', 'temperate', 'oceans, islands', '27000000000'),
    new Planet(29, 'Felucia', 'hot, humid', 'fungal forests', '8500000'),
    new Planet(30, 'Malachor', 'cold', 'deserts, ruins', 'unknown'),
];


const getNewId = () => {
    const ids = planets.map(planet => planet.id)
    const maxId = Math.max(...ids) + 1

    return maxId
}

module.exports = { planets,  getNewId }