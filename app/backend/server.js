const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');

const app = express();

// ✅ Allow all origins temporarily (later we tighten for prod)
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:3000",
  "https://stock-frontend.kindbeach-fc6d1390.eastus.azurecontainerapps.io"
];

app.use(cors());



// ✅ Body parser
app.use(express.json());

// ✅ Routes
app.use('/api/contact', contactRoutes);

// ✅ Dynamic PORT for container (default 5000)
const PORT = process.env.PORT || 5000;

// ✅ Connect to DB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.log(err));
