const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/";
mongoclient.connect(url, function (error, database) {
  if (error) {
    throw error;

  }
  var dbobject = database.db('navigcollection');//use for create database   
  console.log("databases is created")
  database.close();
})