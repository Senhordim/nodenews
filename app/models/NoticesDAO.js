function NoticesDAO(connection){
  this._connection = connection;
}

NoticesDAO.prototype.getNotices = function(callback){
  this._connection.query('select * from news', callback)
}

NoticesDAO.prototype.getNotice = function(callback){
  this._connection.query('select * from news where id = 2', callback)
}

NoticesDAO.prototype.saveNotice = function(notice, callback){
  this._connection.query('insert into news set ?', notice, callback)
}


module.exports = function(){
  return NoticesDAO;
}
