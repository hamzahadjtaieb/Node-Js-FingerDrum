var mysql = require('mysql');
const host = 'localhost';
const user = 'root';
const password = 'root';

var bodyParser=require("body-parser");
var connection = mysql.createConnection({
  host: 'localhost',
  user: user,
  password : password,
  database: 'examSim34'
});
var express = require('express');
var app = express();
var port=1616;
  app.set('port', process.env.PORT || port);
  app.listen(app.get('port'), function () {
      console.log('server is running on port ',app.get('port'));
  });
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
connection.connect();


app.get('/selectAll', function(req, res) {
  connection.query('SELECT * FROM `medecin` ', function(error, results, fields) {
    if (results.length > 0) {
      for (i = 0; i < results.length; i++)
        console.log("id : " + results[i].id + " valeur " + results[i].valeur);
    }
    res.json(results);
  });
})

app.get('/selectById', function(req, res) {
  id = req.query.id;
  connection.query('SELECT * FROM `medecin` WHERE `id` ='+id,
   function(error, results, fields) {
  
    res.json(results);
  });
})

app.get('/selectByRole', function(req, res) {
  role = req.query.role;
  connection.query("SELECT * FROM `medecin` WHERE `role` like '"+role+"'",
   function(error, results, fields) {
  
    res.json(results);
  });
})






