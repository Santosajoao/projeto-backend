const User = function (id, name, email, user, password, isAdm) {
    this.id = id
    this.name = name
    this.email = email
    this.user = user
    this.password = password
    this.isAdm = isAdm

    this.getId = function() {
        return this.id
    }

    this.getName = function() {
        return this.name
    }

    this.getEmail = function() {
        return this.email
    }

    this.getUser = function() {
        return this.user
    }

    this.getIsAdm = function() {
        return this.isAdm
    }
}

module.exports = User