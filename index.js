require("dotenv").config();
const express = require("express");
const { urlNotValid } = require("./middlewares/auth.js");
const characters = require("./routes/characters");
const users = require("./routes/users.js");
const planets = require("./routes/planets");
const swaggerDoc = require("./swagger-output.json");
const swaggerUi = require("swagger-ui-express");

const app = express();

app.use(express.json());

app.use("/characters", characters);
app.use("/users", users);
app.use("/planets", planets);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(urlNotValid);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
