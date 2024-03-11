const ErrorResponse = require("../utils/errorResponse");

const asyncHandler = require("../middleware/asyncHandler");
const { createRandomIssue } = require("../utils/generator");
const { Issue } = require("../model/issue");

exports.getIssues = asyncHandler(async (req, res, next) => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push(createRandomIssue());
  }
  res.status(200).json({ status: true, data });
});

exports.getAllIssues = asyncHandler(async (req, res, next) => {
  try {
    const issues = await Issue.find();
    // Return a success response with the retrieved messages
    res.status(200).json({ success: true, issues });
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error getting messages:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});
