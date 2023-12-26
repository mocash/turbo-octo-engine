const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { body: '<h1>Welcome to Express EJS CSS</h1>' });
});

// Routes for each page
app.get('/about', (req, res) => {
    res.render('about', { body: '' });
});

app.get('/admissions', (req, res) => {
    res.render('admissions', { body: '' });
});

app.get('/courses', (req, res) => {
    res.render('courses', { body: '' });
});

app.get('/faculty', (req, res) => {
    res.render('faculty', { body: '' });
});

app.get('/financialaid', (req, res) => {
    res.render('financialAid', { body: '' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { body: '' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
