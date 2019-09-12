var express = require('express');
var router = express.Router();
var Candidate = require('../models/candidate');

/* GET candidates listing. 
router.get('/', function(req, res, next) {
  console.log('entra al router get');
  Candidate.find((err, candidates) => {
      if(err){
        console.log(err);
        return res.status(500).send(err);
      } else {
        res.status(200).render('candidates', { candidates: candidates });
        console.log(candidates);
      }
    });
});*/

/* POST para nuevo candidato...*/
router.post('/', function(req, res, next){

    var candidate = new Candidate({
      name: req.body.nameCand,
      lastName: req.body.lastCand,
      sex: req.body.sexCand,
      team: req.body.teamCand,
      cantVotes: 0
    });

    candidate.save(function(err, response){
      if(err) return res.status(500).send
      (error);
      if(response){
        res.status(200).redirect("/candidates");
      }else{
        res.status(500).send(new Error("No se pudo dar de alta"));
      }
    });
});

module.exports = router;
