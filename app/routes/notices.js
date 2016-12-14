module.exports = function(application){

  application.get('/notices', function(req, res){
    application.app.controllers.notices.index(application, req, res);
  });

  application.get('/notice', function(req, res){
    application.app.controllers.notices.show(application, req, res);
  });

};
