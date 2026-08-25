const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Add the required headers for all responses
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
  next();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});