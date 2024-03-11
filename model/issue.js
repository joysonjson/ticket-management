const mongoose = require("mongoose");

// Define the Issue schema
const issueSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["open", "closed"],
    default: "open", // Set default value to 'open'
  },
  initialMessage: {
    type: String,
    required: true,
  }, // Embed the messageSchema directly in the issueSchema
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = { Issue };
