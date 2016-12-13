module.exports = function(application){
  application.get('/admin', function(req, res){
    res.render("admin/form");
  })

  application.post('/notices/save', function(req, res){

    var notice = req.body;
    var connection = application.config.dbConnection();
    var noticesModel = application.app.models.noticesModel;

    noticesModel.saveNotice(notice, connection, function(error, result){
      res.redirect('/notices');
    });
    
  })
}
