const Character = function (id, name, gender, height) {
    this.id = id
    this.name = name
    this.gender = gender
    this.height = height
    this.population = population

    this.getId = function() {
        return this.id
    }

    this.getName = function() {
        return this.name
    }

    this.getGender = function() {
        return this.gender
    }

    this.getHeight = function() {
        return this.height
    }

}

module.exports = Character