const express = require('express');
const app = express();
const path = require('path');

// -------------- serve static folders -------------- //
app.use('/views', express.static(path.join(__dirname, 'views')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/img', express.static(path.join(__dirname, 'img')));

// ------------- express get handlers ---------------- //

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/messages', (req, res) => {
  res.sendFile(path.join(__dirname, 'messages.html'));
});
app.get('/card', (req, res) => {
  res.sendFile(path.join(__dirname, 'card.html'));
});
app.get('/createCard', (req, res) => {
  res.sendFile(path.join(__dirname, 'createCard.html'));
});
app.get('/genHelp', (req, res) => {
  res.sendFile(path.join(__dirname, 'genHelp.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.get('/:page', (req, res) => {
  res.redirect('http://pearlhacks2020-269022.appspot.com/');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

