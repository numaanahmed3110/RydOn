const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("✅ Connected to DB");
  } catch (err) {
    console.error("❌ Database connection error:", err);
    process.exit(1); // Exit process if connection fails
  }
}

module.exports = connectToDb;
