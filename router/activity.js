const express = require("express");
const router = express.Router();

const { startAcivity, stopActivity } = require("../controller/activity");

router.route("/start-activity").post(startAcivity);
router.route("/stop-activity").post(stopActivity);

module.exports = router;
