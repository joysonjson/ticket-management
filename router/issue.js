const express = require("express");
const router = express.Router();

const {
  getIssueDetails,
  createIssue,
  getOpenIssues,
  getMessageForTheIssue,
  resolveIssue,
} = require("../controller/issue");

module.exports = function (wss) {
  console.log("wss in the issue router", wss);
  router.post("/", createIssue(wss));
  router.route("/").get(getOpenIssues);
  router.route("/:id").get(getIssueDetails);
  router.route("/:id").put(resolveIssue);
  router.route("/user/:userId").get(getOpenIssues);
  return router;
};
