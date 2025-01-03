const express = require("express");

const developerController = require("../controllers/developerController");
const tokenVerifyMidleware = require("../middlewares/tokenVerifyMidleware");
const { CreateToken, DecodeToken } = require("../controllers/tokenController");
const { IssueToken } = require("../controllers/tokenIssueController");
const router = express.Router();

router.get("/issueToken", IssueToken);
router.get(
  "/developers",
  tokenVerifyMidleware,
  developerController.GetAllDevelopers
);
router.post(
  "/developer",
  tokenVerifyMidleware,
  developerController.InsertDeveloper
);
router.put(
  "/developer/:id",
  tokenVerifyMidleware,
  developerController.UpdateDeveloper
);
router.delete(
  "/developer/:id",
  tokenVerifyMidleware,
  developerController.DeleteDeveloper
);

//create token
router.get("/createToken", CreateToken);
//decode token
router.get("/decodeToken", DecodeToken);

//Undefine route
router.use("*", (req, res) => {
  res.status(404).json({ status: "404", data: "This route is not defined" });
});

module.exports = router;
