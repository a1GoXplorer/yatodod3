  //load the modules!
  var express = require('express');
  var bodyParser = require('body-parser');
  var ejs = require('ejs');
  var request = require('request');
  var app = express();

  //parse them bodies, yo
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
  extended: true
  }));
  app.set('view engine', 'ejs');

  var todos = [{todo: "Make todo app"}, {todo: "Floss"}, {todo: "Pay people"}, {todo: "Take out trash"}];

  app.get('/todos', function(req, res) {
    res.render('todos/index.ejs', {todosList: todos})
  });

  app.post('/todos', function(req, res) {
    console.log(req.body);
    todos.push(req.body);
    res.redirect('/todos');
  });

  app.get('/todos/new', function(req, res) {
    res.render('todos/new.ejs')
  });
  

  app.get('/', function(req, res) {
    res.render('index.ejs');
  });


  //listen...do you want to know a secret?
  app.listen(3000, function() {
    console.log("Lights are on.")
  });