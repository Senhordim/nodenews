module.exports = function(app){

  app.get('/notice', function(req, res){

    var connection = app.config.dbConnection();

    connection.query('select * from news where id = 2', function(error, result){
      res.render("notices/notice", {notice : result})
    });

  });

};
