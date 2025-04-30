const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("TutorIn Backend is running 🚀");
});

// Tambahkan routes lain di sini...

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
