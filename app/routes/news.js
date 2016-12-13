var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

  var connection = dbConnection();

  app.get('/notices', function(req, res){

    connection.query('select * from news', function(error, result){
      res.render("news/notices", {notices : result})
    });

  });

};
