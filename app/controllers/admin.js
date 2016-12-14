module.exports.create = function(application, req, res){
  res.render("admin/form", { valited : {}, notice : {} });
}

module.exports.save = function(application, req, res){
  var notice = req.body;

  // valitadions
  req.assert('title', 'Título não pode ficar vazio').notEmpty();
  req.assert('summary', 'Descrição não pode ficar vazia').notEmpty();
  req.assert('body', 'Texto não pode ficar vazio').notEmpty();

  var errors = req.validationErrors();
  console.log(errors);

  if (errors){
    res.render("admin/form", { valited : errors, notice : notice });
    return;
  }

  var connection = application.config.dbConnection();
  var noticesModel = new application.app.models.NoticesDAO(connection);

  noticesModel.saveNotice(notice, function(error, result){
    res.redirect('/notices');
  });
}
