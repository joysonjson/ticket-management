const asyncHandler = require("../middleware/asyncHandler");
const { Message } = require("../model/message");

exports.addMessage = (wss) =>
  asyncHandler(async (req, res, next) => {
    try {
      // Extract data from the request body
      const { issueId, isAdmin, content } = req.body;

      // Create a new message document
      const message = new Message({ issueId, isAdmin, content });

      // Save the message to the database
      await message.save();

      console.log("wss clients", wss.clients);
      wss.clients.forEach((client) => {
        // Check if the client is an admin and their connection is open
        if (client.isAdmin && client.readyState === 1) {
          // Send the message to all clients except the one who sent it
          if (client !== wss) {
            client.send(
              JSON.stringify({
                event: "message",
                data: message,
              })
            );
          }
        }
        // Check if the client's issueId matches the one from the API body
        else if (
          client.issueId === issueId &&
          isAdmin &&
          client.readyState === 1
        ) {
          // Send the message to all clients with the same issueId except the one who sent it
          if (client !== wss) {
            client.send(
              JSON.stringify({
                event: "message",
                data: message,
              })
            );
          }
        }
      });

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
