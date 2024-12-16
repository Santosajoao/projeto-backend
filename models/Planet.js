const Planet = function (id, name, climate, terrain, population) {
    this.id = id
    this.name = name
    this.climate = climate
    this.terrain = terrain
    this.population = population

    this.getId = function() {
        return this.id
    }

    this.getName = function() {
        return this.name
    }

    this.getClimate = function() {
        return this.climate
    }

    this.getTerrain = function() {
        return this.terrain
    }

    this.getPoulation = function() {
        return this.population
    }

}

module.exports = Planet