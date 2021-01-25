const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
//const port = 3000;

//import routów
const matchResultRoutes = require('./api/routes/match-results');

//połączenie z MongoDB 
//Replace <password> with the password for the Admin user. 
//Replace <dbname> with the name of the database that connections will use by default. 
//Ensure any option params are URL encoded.
mongoose.connect(
  'mongodb+srv://Admin:Admin@cluster0.1n81t.mongodb.net/TttmGameData?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

//logger
app.use(morgan('combined'));

//parsowanie body
app.use(bodyParser.json());

//routy
app.use('/results', matchResultRoutes);

//statyczne pliki
app.use(express.static('game'));

//obsługa błędów
app.use((req, res, next) => {
  const error = new Error('Nie odnaleziono');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ wiadomość: error.message });
});

module.exports = app;