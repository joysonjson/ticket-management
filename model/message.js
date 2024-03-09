const mongoose = require("mongoose");

// Define the Message schema
const messageSchema = new mongoose.Schema({
  //   _id: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     required: true,
  //     auto: true, // Automatically generate primary key _id
  //   },
  issueId: {
    type: String,
    ref: "Issue", // Reference to the Issue model
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // Add other fields as needed
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Message = mongoose.model("Message", messageSchema);
module.exports = { Message };
