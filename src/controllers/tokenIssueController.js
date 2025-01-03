const jwt = require("jsonwebtoken");
exports.IssueToken = (req, res) => {
  let payload = {
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    data: { Name: "Ahad", City: "Dhaka", Admin: true },
  };
  let token = jwt.sign(payload, "secretKey123");
  res.send(token);
};