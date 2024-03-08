const ErrorResponse = require("../utils/errorResponse");

const asyncHandler = require("../middleware/asyncHandler");
const { createRandomIssue } = require("../utils/generator");

exports.getIssues = asyncHandler(async (req, res, next) => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push(createRandomIssue());
  }
  res.status(200).json({ status: true, data });
});
