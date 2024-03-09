const asyncHandler = require("../middleware/asyncHandler");

exports.addMessage = (wss) =>
  asyncHandler(async (req, res, next) => {
    const { message, room } = req.body;
    wss.clients.forEach((client) => {
      if (client.room == room && client.readyState === 1) {
        console.log("boardcasting message", message, room);
        client.send(JSON.stringify(message));
      }
    });
    res.status(200).json({
      status: true,
      message: "Message added",
      data: req.body,
    });
  });
