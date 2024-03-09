const express = require("express");
const router = express.Router();

const { addMessage, getMessageForTheIssue } = require("../controller/message");

// router.route("/message").post(addMessage);
module.exports = function (wss) {
  router.post("/message", addMessage(wss));
  return router;
};
router.route("/message/:issueId/").get(getMessageForTheIssue);
