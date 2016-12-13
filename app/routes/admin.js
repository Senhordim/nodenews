module.exports = function(application){
  application.get('/admin', function(req, res){
    res.render("admin/form");
  })

  application.post('/notices/save', function(req, res){

    var notice = req.body;
    var connection = application.config.dbConnection();
    var noticesModel = new application.app.models.NoticesDAO(connection);

    noticesModel.saveNotice(notice, function(error, result){
      res.redirect('/notices');
    });

  })
}
