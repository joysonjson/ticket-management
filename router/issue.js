const express = require("express");
const router = express.Router();

const { getIssueDetails } = require("../controller/issue");

router.route("/:id").get(getIssueDetails);

module.exports = router;
