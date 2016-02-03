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

  var things = [{item: "jar of sauce", owner: "the feds"}, {item: "red paper", owner: "hopless masses"}, {item: "free will", owner: "the french"}, {item: "mashed potato", owner: "lonely person"}];
  

  app.get('/', function(req, res) {
    res.render('search.ejs', {name: "MarkMarkMarkMarkMark (aka Mark x 5)"});
    console.log(req.body);
  });

  app.get('/things', function(req, res) {
    res.render('things/index.ejs', {thingsList: things})
  });

  app.post('/things', function(req, res) {
    console.log(req.body);
    things.push(req.body);
    res.redirect('/things');
  });

  app.get('/things/new', function(req, res) {
    res.render('things/new.ejs')
  });

  app.get('/search', function(req, res) {
    var searchTerm = req.body.movieTitle;
    var url = "http://www.ombdapi.com/?s=" + searchTerm;
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var obj = JSON.parse(body);
        res.render('results.ejs', {movieList: obj.Search});
      }
    });
  });


  app.listen(3000, function() {
    console.log("Lights are on.")
  });