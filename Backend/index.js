const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const registerRoute = require("./routes/register"); // ✅ correct require
const userRoute = require("./routes/user"); // ✅ correct require

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Attach routes
app.use("/api/register", registerRoute);
app.use("/api/user", userRoute);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,

})

  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Mongo Error:", err));

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
