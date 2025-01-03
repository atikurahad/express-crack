const jwt = require("jsonwebtoken");

exports.CreateToken = (req, res) => {
  let payload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: { Name: "Ahad", City: "Dhaka", Admin: true },
  };
  let token = jwt.sign(payload, "secretKey123");
  res.send(token);
};

exports.DecodeToken = (req, res) => {
  let Token = req.headers['jwt-token'];

  jwt.verify(Token, "secretKey123", (err, decoded) => {
    if (err) {
      res.status(401).json({ status: 401, data: "Unauthorized" });
    } else {
      res.status(200).json({ status: "success", data: decoded });
    }
  });
};
