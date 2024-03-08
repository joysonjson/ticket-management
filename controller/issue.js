const ErrorResponse = require("../utils/errorResponse");

const asyncHandler = require("../middleware/asyncHandler");
const faker = require("faker");
const { generateIssueDetails } = require("../utils/generator");

exports.getIssueDetails = asyncHandler(async (req, res, next) => {
  res.status(200).json({ status: true, data: generateIssueDetails() });
  // res.status(200).json({ status: true });
});
