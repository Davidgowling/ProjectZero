const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// ✅ Allow requests from other origins
app.use(cors());

// Allow JSON request bodies
app.use(express.json());

// Log every request (debug)
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Health check
app.get('/', (req, res) => {
    res.send('Project Zero API is running');
});

// Register endpoint
app.post('/register', (req, res) => {
    const { name, email } = req.body;

    console.log('--- REGISTER ENDPOINT HIT ---');
    console.log('Name:', name);
    console.log('Email:', email);

    res.json({
        success: true,
        message: 'Registration received'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`);
});
