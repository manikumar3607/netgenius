const express = require("express");
const cors = require("cors");
const multer = require("multer");
const connectDB = require("./config/db");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/user");
const userController = require("./controllers/userController");
const app = express();
const PORT = 5000;

// Middleware to handle CORS
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from frontend (React) on localhost:3000
  methods: 'GET,POST,PUT,DELETE',  // Allow specific HTTP methods
  credentials: true  // Allow credentials like cookies or authorization headers if needed
}));

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded files

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/usercon/download", userController.downloadData);
// Dummy credentials for admin login
const dummyAdminCredentials = {
  username: 'admin',
  password: 'admin123',
};

// Admin login route
app.post('/adminlogin', (req, res) => {
  const { username, password } = req.body;
  if (username === dummyAdminCredentials.username && password === dummyAdminCredentials.password) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
