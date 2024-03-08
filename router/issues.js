const express = require("express");
const router = express.Router();

const { getIssues } = require("../controller/issues");

router.route("/").get(getIssues);

module.exports = router;
