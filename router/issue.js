const express = require("express");
const router = express.Router();

const {
  getIssueDetails,
  createIssue,
  getOpenIssues,
  getMessageForTheIssue,
} = require("../controller/issue");

router.route("/").post(createIssue);
router.route("/").get(getOpenIssues);
router.route("/:id").get(getIssueDetails);
router.route("/user/:userId").get(getOpenIssues);

module.exports = router;
