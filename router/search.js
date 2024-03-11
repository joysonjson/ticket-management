const express = require("express");
const router = express.Router();

const { searchIssues } = require("../controller/search");

router.route("/").get(searchIssues);

module.exports = router;
