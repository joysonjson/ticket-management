const express = require("express");
const router = express.Router();

const {
  getIssueDetails,
  createIssue,
  getOpenIssues,
  getMessageForTheIssue,
} = require("../controller/issue");

module.exports = function (wss) {
  router.post("/", createIssue(wss));
  router.route("/").get(getOpenIssues);
  router.route("/:id").get(getIssueDetails);
  router.route("/user/:userId").get(getOpenIssues);
  return router;
};
