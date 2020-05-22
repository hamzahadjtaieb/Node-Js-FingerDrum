'use strict';

var rating = require('../models/rating.js');

exports.list_all_rates = function(req, res) {
  rating.getAllrates(function(err, rating) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', rating);
    res.send(rating);
  });

};


exports.create_rate = function(req, res) {
    console.log("In Rating controller:create_rate ");
    var new_rating = new rating(req.body);
    
    rating.createrate (new_rating.rating , function(err, rating) {
      
      if (err)
        res.send(err);
      res.json(rating);
    });
  
  };
  