const mongoose = require("mongoose");

// Define the Issue schema
const issueSchema = new mongoose.Schema({
  //   _id: {
  //     type: String,
  //     required: true,
  //     unique: true,
  //   },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: ["open", "closed"],
    default: "open", // Set default value to 'open'
  },
  // Add other fields as needed
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create models based on the schemas
const Issue = mongoose.model("Issue", issueSchema);

module.exports = { Issue };
