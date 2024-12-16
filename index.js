//Importação de frameworks e funções no projeto, uso de dotenv para o auth.
require('dotenv').config();
const express = require('express')
const {urlNotValid} = require('./middlewares/auth.js')
const characters = require('./routes/characters')
const starships = require('./routes/starships')
const planets = require('./routes/planets')
const swaggerDoc = require('./swagger-output.json');
const swaggerUi = require('swagger-ui-express')

const app = express()

app.use(express.json())

//O servidor rodará na porta 3000, tendo 3 rotas principais, /users, /countries, /cities.
app.use('/characters', characters)
app.use('/starships', starships)
app.use('/planets', planets)

//Rota como pedido nos requisitos para visualizar a documentação da API gerada automaticamente pelo swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));


//Chamada de middleware do arquivo auth.js para caso não encontre a rota
app.use(urlNotValid)

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))