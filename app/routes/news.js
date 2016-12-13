module.exports = function(app){

  app.get('/notices', function(req, res){

    var mysql = require('mysql');

    var connection = mysql.createConnection({
      host : 'localhost',
      user : 'root',
      password: '',
      database : 'node_news'
    });

    connection.query('select * from news', function(error, result){
      res.send(result)
    });

    // res.render("news/notices");

  });

};
