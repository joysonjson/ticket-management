const asyncHandler = require("../middleware/asyncHandler");
const { Issue } = require("../model/issue");
const { Message } = require("../model/message");
const { generateIssueDetails } = require("../utils/generator");

exports.getIssueDetails = asyncHandler(async (req, res, next) => {
  res.status(200).json({ status: true, data: generateIssueDetails() });
});

exports.createIssue = (wss) =>
  asyncHandler(async (req, res, next) => {
    try {
      // Create a new issue based on the request body
      const { userId, initialMessage } = req.body;
      const issue = new Issue({ userId, initialMessage });
      console.log("wss clients", wss.clients);

      wss.clients.forEach((client) => {
        if (client.isAdmin && client.readyState === 1) {
          console.log("creating new issue", issue);
          client.send(
            JSON.stringify({
              event: "issue_created",
              data: issue,
            })
          );
        } else {
          // console.log(
          //   "not able to send to the client",
          //   client.isAdmin,
          //   client.readyState
          // );
        }
      });
      // Save the new issue to the database
      await issue.save();

      // Send a success response with the created issue
      res.status(201).json({ success: true, issue });
    } catch (error) {
      // Handle errors and send an error response
      console.error("Error creating issue:", error);
      res.status(500).json({ success: false, error: error.message });
    }
  });

exports.getOpenIssues = asyncHandler(async (req, res, next) => {
  try {
    // Extract the user ID from the request parameters
    const { userId } = req.params;

    const query = userId ? { userId, status: "open" } : { status: "open" };

    // Query the database for issues associated with the user ID
    const issues = await Issue.find(query);

    // Send a success response with the issue IDs
    res.status(200).json({ success: true, issues });
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error getting user issues:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

exports.resolveIssue = asyncHandler(async (req, res, next) => {
  try {
    // Extract the issue ID from the request parameters
    const { id } = req.params;

    // Update the status of the issue to "closed"
    const updatedIssue = await Issue.findByIdAndUpdate(
      id,
      { status: "closed" },
      { new: true }
    );

    // If the issue was not found, return an error response
    if (!updatedIssue) {
      return res.status(404).json({ success: false, error: "Issue not found" });
    }

    // Send a success response with the updated issue
    res.status(200).json({ success: true, issue: updatedIssue });
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error resolving issue:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});
