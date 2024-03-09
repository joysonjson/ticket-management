const asyncHandler = require("../middleware/asyncHandler");
const { generateIssueDetails } = require("../utils/generator");

exports.getIssueDetails = asyncHandler(async (req, res, next) => {
  res.status(200).json({ status: true, data: generateIssueDetails() });
});
