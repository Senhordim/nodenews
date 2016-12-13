module.exports = function(app){
  app.get('/notices', function(req, res){
    res.render("news/notices");
  });
}
