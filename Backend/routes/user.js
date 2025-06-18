const express = require("express");
const router = express.Router();
const Registration = require("../models/Registration");

// GET user by uniqueId (UUID string)
router.get("/:id", async (req, res) => {
  try {
    const user = await Registration.findOne({ uniqueId: req.params.id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;
