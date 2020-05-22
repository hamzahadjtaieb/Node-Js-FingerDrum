const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;




app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ limit: '50mb' , extended: true }));
app.use(bodyParser.json({limit: '50mb' , extended: true}));

var routes = require('./app/router/userRouter'); //importing route
routes(app); //register the route
