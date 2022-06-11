const express = require("express");
const winston = require("winston");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
// backend accept cookie and json
app.use(bodyParser.json());
app.use(cookieParser());

// load the startup
require("./startup/logging")();
require("./startup/db")();
require("./startup/routes")(app);
require("./startup/config")();

// if the env port does not exist, the port will be 6001
const port = process.env.PORT || 6001;

app.listen(port, () => winston.info(`Listening on port ${port}...`));
