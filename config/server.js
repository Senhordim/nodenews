// Require Express para dentro do Projeto
var express = require('express');
var consign = require('consign');

// Executando a função express
var app = express();

// Setando ejs como engine de view
app.set('view engine', 'ejs');
app.set('views', './app/views')

// config routes to project with consign module
consign()
  .include('app/routes')
  .then('config/dbConnection.js')
  .then('app/models')
  .into(app);

// autoload connection Mysql

// Exportando modulo
module.exports = app;
