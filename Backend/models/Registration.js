const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  rollNumber: String,
  type: String,
  events: [String],
  college: String,
  gender: String,
  department: String,
  year: String,
  uniqueId: { type: String, unique: true },
  registeredAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Registration", registrationSchema);
