const express = require("express");
const router = express.Router();

const { getIssues, getAllIssues } = require("../controller/issues");

router.route("/").get(getIssues);
router.route("/all").get(getAllIssues);
module.exports = router;
