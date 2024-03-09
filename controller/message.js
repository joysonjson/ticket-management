const asyncHandler = require("../middleware/asyncHandler");
const { Message } = require("../model/message");

exports.addMessage = (wss) =>
  asyncHandler(async (req, res, next) => {
    const { message, issueId } = req.body;
    wss.clients.forEach((client) => {
      if (client.issueId == issueId && client.readyState === 1) {
        console.log("boardcasting message", message, issueId);
        client.send(JSON.stringify(message));
      }
    });
    try {
      // Extract data from the request body
      const { issueId, isAdmin, content } = req.body;

      // Create a new message document
      const message = new Message({ issueId, isAdmin, content });

      // Save the message to the database
      await message.save();

      // Return a success response
      res.status(201).json({ success: true, message });
    } catch (error) {
      // Handle errors and send an error response
      console.error("Error creating message:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  });

exports.getMessageForTheIssue = asyncHandler(async (req, res, next) => {
  try {
    // Extract the issue ID from the request parameters
    const { issueId } = req.params;

    // Query the database for messages associated with the specified issue ID
    const messages = await Message.find({ issueId });

    // Return a success response with the retrieved messages
    res.status(200).json({ success: true, messages });
  } catch (error) {
    // Handle errors and send an error response
    console.error("Error getting messages:", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});
