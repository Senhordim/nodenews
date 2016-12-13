var app = require('./config/server');

var routeNews = require('./app/routes/news')(app);
var routeHome = require('./app/routes/home')(app);
var routeAdmin = require('./app/routes/admin')(app);

app.listen(3000, function(){
  console.log("Servidor on");
});
