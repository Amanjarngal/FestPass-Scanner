import express from 'express';
import path from 'path';
import mongoose from 'mongoose'; // if using Mongoose
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const __dirname = path.resolve(); // Important for ESM

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// API routes
app.use('/api/register', yourRegisterRoute); // replace with your actual route handler

// Serve frontend
app.use(express.static(path.join(__dirname, 'client')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
