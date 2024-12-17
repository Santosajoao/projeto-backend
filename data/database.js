const User = require('../models/User')

let users = [
    new User(1, 'Joao Pedro', 'joao@teste', 'joao', 'joao', true),
    new User(2, 'Victor Tavares', 'victor@teste.com', 'victor', 'victor', true),
    new User(3, 'Jorge', 'jorge@teste.ccom', 'jorge', 'jorge', false),
    new User(4, 'Neymar', 'neymar@teste.com', 'neymar', 'neymar', false),
    new User(5, 'Ronaldo', 'ronaldo@teste.com', 'ronaldo', 'ronaldo', false),
    new User(6, 'Silvio Santos', 'silvio@teste.com', 'silviosantos', 'silvio', false),
    new User(7, 'Ana Silva', 'ana@teste.com', 'ana', 'ana', false),
    new User(8, 'Pedro Almeida', 'pedro@teste.com', 'pedro', 'pedro', false),
    new User(9, 'Maria Costa', 'maria@teste.com', 'maria', 'maria', false),
    new User(10, 'Lucas Ferreira', 'lucas@teste.com', 'lucas', 'lucas', false),
    new User(11, 'Bruna Oliveira', 'bruna@teste.com', 'bruna', 'bruna', false),
    new User(12, 'Felipe Santos', 'felipe@teste.com', 'felipe', 'felipe', false),
    new User(13, 'Carolina Pereira', 'carolina@teste.com', 'carolina', 'carolina', false),
    new User(14, 'Mateus Rodrigues', 'mateus@teste.com', 'mateus', 'mateus', false),
    new User(15, 'Julia Martins', 'julia@teste.com', 'julia', 'julia', false),
    new User(16, 'Renato Silva', 'renato@teste.com', 'renato', 'renato', false),
    new User(17, 'Bianca Souza', 'bianca@teste.com', 'bianca', 'bianca', false),
    new User(18, 'Eduardo Lima', 'eduardo@teste.com', 'eduardo', 'eduardo', false),
    new User(19, 'Larissa Barbosa', 'larissa@teste.com', 'larissa', 'larissa', false),
    new User(20, 'Gabriel Ribeiro', 'gabriel@teste.com', 'gabriel', 'gabriel', false),
    new User(21, 'Alice Mendes', 'alice@teste.com', 'alice', 'alice', false),
    new User(22, 'Diego Almeida', 'diego@teste.com', 'diego', 'diego', false),
    new User(23, 'Isabela Fernandes', 'isabela@teste.com', 'isabela', 'isabela', false),
    new User(24, 'Fernando Costa', 'fernando@teste.com', 'fernando', 'fernando', false),
    new User(25, 'Camila Gomes', 'camila@teste.com', 'camila', 'camila', false),
    new User(26, 'Rafael Duarte', 'rafael@teste.com', 'rafael', 'rafael', false),
    new User(27, 'Daniela Araujo', 'daniela@teste.com', 'daniela', 'daniela', false),
    new User(28, 'Henrique Cardoso', 'henrique@teste.com', 'henrique', 'henrique', false),
    new User(29, 'Patricia Moraes', 'patricia@teste.com', 'patricia', 'patricia', false),
    new User(30, 'André Vieira', 'andre@teste.com', 'andre', 'andre', false),
]

// Função para gerar um novo ID
const getNewId = () => {
    const ids = users.map(user => user.id)
    const maxId = Math.max(...ids) + 1

    return maxId
}

module.exports = { users, getNewId }