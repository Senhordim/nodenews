module.exports = function(application){
  application.get('/admin', function(req, res){
    application.app.controllers.admin.create(application, req, res);
  })

  application.post('/notices/save', function(req, res){
    application.app.controllers.admin.save(application, req, res);
  })
}
