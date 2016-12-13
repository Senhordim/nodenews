module.exports = function(application){

  application.get('/notices', function(req, res){

    var connection = application.config.dbConnection();
    var noticesModel = new application.app.models.NoticesDAO(connection);

    noticesModel.getNotices( function(error, result){
      res.render("notices/notices", {notices : result})
    });

  });

};
