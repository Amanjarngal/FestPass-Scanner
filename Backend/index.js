const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// ✅ Use require instead of import
const userRoute = require("./routes/user");
const registerRoute = require("./routes/register");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Mount the routes
app.use("/api/register", registerRoute);
app.use("/api/user", userRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("Mongo Error:", err));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
