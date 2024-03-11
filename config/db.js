const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://joysonps:w99IypLkHeaVGOEZ@cluster.0ym8pfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster",
      {}
    );
    const db = conn.connect;
    // await db.collection("Issue").deleteMany({});
    // await db.collection("Message").deleteMany({});

    console.log(`Mongo db connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = { connectToDb };
