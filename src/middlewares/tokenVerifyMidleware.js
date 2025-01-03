module.exports = (req, res, next) => {
  let Token = req.headers["jwt-token"];
  jwt.verrify(Token, "secretkey123", (err, decoded) => {
    if (err) {
      res.staus(401).json({ status: "Invalid Token", data: "Unauthorized" });
    } else {

      next();
    }
  });
};
