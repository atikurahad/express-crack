
const developerController = require("../controllers/developerController");

const express = require("express");

const router = express.Router();

router.get('/developers', developerController.GetAllDevelopers);
router.post('/developer',developerController.InsertDeveloper)
//Undefine route
router.use("*", (req, res) => {
  res.status(404).json({ status: "404", data: "This route is not defined" });
});

module.exports = router;