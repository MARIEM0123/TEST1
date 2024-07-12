const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

// Connect to database
connectDB();

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cookieParser()); // Parse cookies

app.use(express.static(path.join(__dirname, 'frontend'))); // Serve static files

app.use('/api/auth', require('./routes/auth')); // Routes for authentication

// Serve HTML files
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'register.html')));
app.get('/main', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'main.html')));

const PORT = process.env.PORT || 5000; // Port number
app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); // Start the server
