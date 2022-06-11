const jwt = require("jsonwebtoken");
const config = require("config");
function auth(req, res, next) {
  const token = req.cookies["x-auth-token"];

  // if the token does not exist
  if (!token) {
    return res.status(401).send("Access denied.");
  }

  try {
    // decrypt the token
    const decoded = jwt.verify(token, config.get("key"));
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).send("Invalid token.");
  }
}

module.exports = { auth };
