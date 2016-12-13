var http = require('http');

var server = http.createServer(function(req, res){
  var category = req.url

  if (category == '/tech') {
    res.end("<html> <body> Notícias de Tecnologia </body> </html>");
  } else if (category == '/fintech') {
    res.end("<html> <body> Notícias de Tecnologia Financeira </body> </html>");
  } else if (category == '/family') {
    res.end("<html> <body> Notícias da família </body> </html>");
  } else {
    res.end("<html> <body> Qualquer notícia </body> </html>");
  }

}).listen(3000);
