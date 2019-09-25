var User = require("../../models/user");
var express = require("express");
var routerApi = express.Router();

routerApi.get("/:dni", function(req, res, next){
    if (req.params.dni) {
      User.findOne({ dni: req.params.dni }, (err, user) => {
        if(user) {
          return res.status(200).send("200");
        }
        if(!user) {
          return res.status(404).send("404");
        }
        if (err) {
          return res.status(500).send("500");
        }
      }) 
    }
});

module.exports = routerApi;