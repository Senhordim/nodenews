// Require mysql drive
var mysql = require('mysql');

// Variavel com a função que executa a conexão
var connMySql = function(){
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database : 'node_news'
  });
}

// exporta a variável 
module.exports = function(){
  return connMySql;
}
