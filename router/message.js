const express = require("express");
const router = express.Router();

const { addMessage } = require("../controller/message");

// router.route("/message").post(addMessage);
module.exports = function (wss) {
  router.post("/message", addMessage(wss));
  return router;
};
