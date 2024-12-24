
const helloController = require("../controllers/helloController");

const express = require("express");

const router = express.Router();

router.get("/hello", helloController.Hello);
router.get("/user", helloController.User);

//Undefine route
router.use("*", (req, res) => {
  res.status(404).json({ status: "404", data: "This route is not defined" });
});

module.exports = router;