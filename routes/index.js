var express = require('express');
var router = express.Router();
var request = require("request");
var createError = require("http-errors");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Elecciones 2019' });
});

/* GET login */
router.get('/login', function(req, res, next){
  res.render('login', {title: "Login"});
});

/* GET votacion */
router.get('/votacion', function(req, res, next){
  res.render('votacion', {title: "Votacion"});
});
module.exports = router;