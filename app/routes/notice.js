module.exports = function(application){

  application.get('/notice', function(req, res){

    var connection = application.config.dbConnection();
    var noticesModel = new application.app.models.NoticesDAO(connection);

    noticesModel.getNotice(function(error, result){
      res.render("notices/notice", {notice : result})
    });

  });

};
