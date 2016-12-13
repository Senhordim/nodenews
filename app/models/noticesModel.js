module.exports = function(){

  this.getNotices = function(connection, callback){
    connection.query('select * from news', callback)
  }

  this.getNotice = function(connection, callback){
    connection.query('select * from news where id = 2', callback)
  }

  return this;
}
