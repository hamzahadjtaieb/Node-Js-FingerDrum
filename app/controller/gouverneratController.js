'use strict';

var gouvernerat = require('../models/gouvernerat.js');

exports.list_all_gouvernerats = function(req, res) {
  gouvernerat.getAllgouvernerat(function(err, gouvernerat) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', gouvernerat);
    res.send(gouvernerat);
  });
};