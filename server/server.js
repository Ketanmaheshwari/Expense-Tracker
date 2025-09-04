// server/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./db_config/db_config");

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Database connection
connectDb();

// Default route
app.get("/", (req, res) => {
  res.json({
    msg: "Expense Tracker API is live"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
