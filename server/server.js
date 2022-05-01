const express = require("express");
const winston = require("winston");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
require("./startup/logging")();
require("./startup/db")();
require("./startup/routes")(app);
require("./startup/config")();

const port = process.env.PORT || 6002;

app.listen(port, () => winston.info(`Listening on port ${port}...`));
