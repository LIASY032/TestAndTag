const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.cookies["x-auth-token"];

  try {
    const decoded = jwt.verify(token, config.get("key"));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}
