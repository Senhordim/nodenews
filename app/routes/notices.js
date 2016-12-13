module.exports = function(application){

  application.get('/notices', function(req, res){

    var connection = application.config.dbConnection();
    var noticesModel = application.app.models.noticesModel;

    noticesModel.getNotices(connection, function(error, result){
      res.render("notices/notices", {notices : result})
    });

  });

};
