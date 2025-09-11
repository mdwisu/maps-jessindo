const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Handle SPA routing - serve index.html for all non-static routes
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// Fallback for all other routes
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 7002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});