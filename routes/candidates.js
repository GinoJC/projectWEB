var express = require('express');
var router = express.Router();
var Candidate = require('../models/candidate');

/* GET candidates listing. */
router.get('/', function(req, res, next) {
  Candidate.find(
    {}, 
    function(err, candidates){
      if(err) return res.status(500).send
      (err);

      res.status(200).render(
        'votacion',
        {
          candidates: candidates
        }
      );
    }
  );
});

/* POST para nuevo candidato...*/
router.post('/', function(req, res, next){

    var candidate = new Candidate({
      name: req.body.namecand,
      cantVotes: 0
    });

    candidate.save(function(err, response){
      if(err) return res.status(500).send
      (error);
      if(response){
        res.status(200).redirect("/");
      }else{
        res.status(500).send(new Error("No se pudo dar de alta"));
      }
    });
});

module.exports = router;
