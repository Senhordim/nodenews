var express = require('express');
var app = express();

app.set('view engine', 'ejs');



app.get('/', function(req, res){
  res.render("home/index");
})

app.get('/admin', function(req, res){
  res.render("admin/form");
})

app.get('/notices', function(req, res){
  res.render("news/notices");
})



app.listen(3000, function(){
  console.log('Servidor rodando com Express');
});
