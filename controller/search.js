const asyncHandler = require("../middleware/asyncHandler");
const { Issue } = require("../model/issue");

exports.searchIssues = asyncHandler(async (req, res, next) => {
  try {
    const query = req.query.q; // Assuming the search query is provided in the query string parameter 'q'

    let issues;
    if (query) {
      issues = await Issue.find({
        initialMessage: { $regex: query, $options: "i" },
      }).sort({ createdAt: -1 });
    } else {
      // If no search query is provided, return an empty array
      issues = [];
    }

    // Return a success response with the retrieved issues
    res.status(200).json({ success: true, issues });
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error searching issues:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});
