require('dotenv').config();
const express = require('express');
const db = require('./db');

const morgan = require('morgan');

const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.json());

// Get all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
  const results = await db.query('SELECT * FROM restaurants');
  console.log(results.rows);
  res.json({
    status: 'success',
    data: {
      restaurants: ['mcdonalds', 'wendys']
    }
  });
});

// Get a single restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
  res.json({
    status: 'success',
    data: {
      restaurant: 'mcdonalds'
    }
  });
});

// Create a restaurant
app.post('/api/v1/restaurants', (req, res) => {
  console.log(req.body);
});

// Update restaurant
app.put('/api/v1/restaurants/:id', (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
});

// Delete restaurant
app.delete('/api/v1/restaurants/:id', (req, res) => {
  res.status(204).json({ status: 'success' });
});

app.listen(PORT, () => {
  console.log(`server is up and listening on port ${PORT}`);
});
