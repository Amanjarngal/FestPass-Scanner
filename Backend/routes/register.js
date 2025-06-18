const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");
const { v4: uuidv4 } = require("uuid");

router.post("/", async (req, res) => {
  const {
    name,
    email,
    phone,
    rollNumber,
    type,
    events,
    college,
    gender,
    department,
    year,
  } = req.body;

  // ✅ Validate required fields
  if (!name || !email || !phone || !rollNumber || !type || !college || !gender || !department || !year) {
    return res.status(400).json({ error: "All required fields must be filled." });
  }

  try {
    // ✅ Check for duplicates
    const duplicate = await Registration.findOne({
      $or: [{ email }, { phone }, { rollNumber }],
    });

    if (duplicate) {
      return res.status(400).json({
        error: "User with this email, phone, or roll number already exists.",
      });
    }

    // ✅ Generate UUID for unique QR ID
    const uniqueId = uuidv4();

    // ✅ Create new registration entry
    const newEntry = new Registration({
      name,
      email,
      phone,
      rollNumber,
      type,
      events,
      college,
      gender,
      department,
      year,
      uniqueId,
    });

    await newEntry.save();

    res.status(200).json({ message: "Registered successfully!", uniqueId });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
});

module.exports = router;
