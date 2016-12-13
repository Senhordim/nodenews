module.exports = function(application){

  application.get('/notice', function(req, res){

    var connection = application.config.dbConnection();
    var noticesModel = application.app.models.noticesModel;

    noticesModel.getNotice(connection, function(error, result){
      res.render("notices/notice", {notice : result})
    });

  });

};
