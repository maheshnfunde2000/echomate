
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const echoes = require('./routes/echoes');
const chats = require('./routes/chats');
const clusters = require('./routes/clusters');
const streams = require('./routes/streams');

// Use routes
app.use('/api/echoes', echoes);
app.use('/api/chats', chats);
app.use('/api/clusters', clusters);
app.use('/api/streams', streams);

// Simple test route
app.get('/', (req, res) => {
  res.send('Echomate-Lite API is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
