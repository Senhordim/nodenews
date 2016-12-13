// Require Express para dentro do Projeto
var express = require('express');

// Executando a função express
var app = express();

// Setando ejs como engine de view
app.set('view engine', 'ejs');

app.set('views', './app/views')

// Exportando modulo
module.exports = app;
