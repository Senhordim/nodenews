module.exports.index = function(application, req, res){
  var connection = application.config.dbConnection();
  var noticesModel = new application.app.models.NoticesDAO(connection);

  noticesModel.getNotices( function(error, result){
    res.render("notices/notices", {notices : result})
  });
}

module.exports.show = function(application, req, res){
  var connection = application.config.dbConnection();
  var noticesModel = new application.app.models.NoticesDAO(connection);

  noticesModel.getNotice(function(error, result){
    res.render("notices/notice", {notice : result})
  });
}
