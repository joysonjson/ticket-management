const asyncHandler = require("../middleware/asyncHandler");
const { generateIssueDetails } = require("../utils/generator");

exports.startAcivity = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  res.status(200).json({
    status: true,
    message: "activity started ",
    data: req.body,
  });
});

exports.stopActivity = asyncHandler(async (req, res, next) => {
  res.status(200).json({
    status: true,
    message: "activity stopeed ",
    data: req.body,
  });
});
