const swaggerAutogen = require('swagger-autogen')();

//Criará um arquivo chamado swaggert-output com a documentação
const outputFile = './swagger-output.json';

//Inserção dos arquivos que contém as rotas
const endpointsFiles = ['./routes/characters.js', './routes/starships.js', './routes/planets.js'];

//Gera a documentação automaticamente ao rodar o index.js
//Desativei ele abaixo pelo fato de já ter gerado uma vez
//Se rodar novamente ele irá "reiniciar" o swagger-output e apagar os ajustes personalizados

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require('./index.js');
});