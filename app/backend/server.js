const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');

const app = express();

/**
 * Allowed Origins
 */
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:3000",
  "https://stock-frontend.kindbeach-fc6d1390.eastus.azurecontainerapps.io"
];

/**
 * CORS Configuration
 */
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (Postman, curl, server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));

/**
 * Body Parser
 */
app.use(express.json());

/**
 * Simple Request Logger
 */
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

/**
 * Root Route
 */
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Stock Market Backend API is running'
  });
});

/**
 * Health Check Route
 */
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    database:
      mongoose.connection.readyState === 1
        ? 'Connected'
        : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

/**
 * API Routes
 */
app.use('/api/contact', contactRoutes);

/**
 * Server Port
 */
const PORT = process.env.PORT || 5000;

/**
 * Database Connection
 */
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  });