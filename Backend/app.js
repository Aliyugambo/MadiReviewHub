// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const reviewRoutes = require('./routes/review');
const treatmentRoutes = require('./routes/treatment');
const researchRoutes = require('./routes/research');
const errorHandler = require('./middlewares/errorHandler');
const rateLimit = require('express-rate-limit');

const app = express();
// Middleware
app.use(cors());

app.use(bodyParser.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes',
  });

app.use(limiter);

app.use('/api/auth', authRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/treatment', treatmentRoutes);
app.use('/api/research', researchRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
