
  var express = require('express');
  var bodyParser = require('body-parser');
  var ejs = require('ejs');
  var app = express();

  //parsen dem bodies
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
  extended: true
  }));
  app.set('view engine', 'ejs');


  app.get('/', function(req, res) {
    res.render('index.ejs');
  });


  app.listen(3000);