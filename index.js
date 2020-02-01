const express = require('express');
const router = require('./src/router');
const PORT = 3000;

const app = express();

// Set view engine
app.set('view engine', 'pug');

// Middleware
app.use(router); // Use router as middleware
app.use(express.static(__dirname + '/public')); // Set static folder

// Start server
const server = app.listen(PORT, () => {
    console.log(`Express running on port ${PORT}`);
});