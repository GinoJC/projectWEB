var express = require('express');
var router = express.Router();
var Candidate = require("../models/candidate");
var User = require("../models/user");

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
  Candidate.find((err, candidates) => {
    if(err){
      return res.status(500).send(err);
    } else {
      res.status(200).render('votacion', {title: "Votacion", candidates: candidates });
    }
  });
});

/* GET candidatos */
router.get('/candidates', function(req, res, next){
  Candidate.find((err, candidates) => {
    if(err){
      return res.status(500).send(err);
    } else {
      res.status(200).render('candidates', {title: "Candidatos", candidates: candidates });
    }
  });
});

/* GET estadisticas */
router.get('/statistics', function(req, res, next){
  
  var total;

  const stat = async () => {
    
    await User.count(function(err, count) {
      total = count;
    });
  
    await Candidate.find((err, candidates) => {
      if(err){
        return res.status(500).send(err)
      }else{
        res.status(200).render('statistics',
        {
          title: "Estadisticas", 
          candidates: candidates,
          total: total
        });
      }
    });
  };

  stat();
  
});

module.exports = router;