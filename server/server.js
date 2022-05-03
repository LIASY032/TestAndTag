const express = require("express");
const winston = require("winston");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
require("./startup/logging")();
require("./startup/db")();
require("./startup/routes")(app);
require("./startup/config")();

const port = process.env.PORT || 6001;

app.listen(port, () => winston.info(`Listening on port ${port}...`));
