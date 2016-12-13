module.exports = function(app){

  app.get('/notices', function(req, res){

    var connection = app.config.dbConnection();

    connection.query('select * from news', function(error, result){
      res.render("news/notices", {notices : result})
    });

  });

};
