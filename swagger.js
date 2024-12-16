const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger-output.json";

const endpointsFiles = [
  "./routes/characters.js",
  "./routes/users.js",
  "./routes/planets.js",
];

swaggerAutogen(outputFile, endpointsFiles).then(() => {
  require("./index.js");
});
