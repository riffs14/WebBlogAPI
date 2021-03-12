'use strict';
var DB = require('../config/database');
exports.index = function(req, res) {
    return res.status(200).send({
      status: true,
      message: "Welcome to Node Express and Mysql App",
      statusCode: 200,
      data: null
    });
};
exports.listUsers = function(req, res) {
  var sql="select name from users where status=’active’ limit 0,10";
  DB.query(sql, function (err, result) {
    if (err) throw err;
    
   return res.status(200).send({
      status: true,
      message: "User List",
      statusCode: 200,
      data: result
    });
  });
  
};