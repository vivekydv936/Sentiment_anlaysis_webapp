const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const feedbackRoutes = require('./routes/feedback');
const eventRoutes = require('./routes/events');

dotenv.config();

const app = express();

// Middleware
const allowedOrigins = [
  'https://sentiment-anlaysis-webapp.vercel.app',
  'http://localhost:3004'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow Vercel preview deployments and main domain
    if (
      allowedOrigins.includes(origin) ||
      /^https:\/\/sentiment-anlaysis-webapp-er7y.*\.vercel\.app$/.test(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/events', eventRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});
app.get('/', (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
    message: 'Server is running',
    data: null,
    statusCode: 200,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    method: req.method,
    headers: req.headers,
    body: req.body,
    query: req.query,
    params: req.params,
    
  });
});

app.get('/api', (req, res) => {
  res.json({ message: "API is working!" });
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 