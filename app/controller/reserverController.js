'use strict';

var reserver = require('../models/reserver.js');



exports.create_reserver = function (req, res) {
  var new_reserver = new reserver(req.body);

  //handles null error 
  if (!new_reserver.reserver) {

    res.status(400).send({ error: true, message: 'Please provide reserver/status' });

  }
  else {

    reserver.addreserver(new_reserver.reserver, function (err, event) {

      if (err)
        res.send(err);
      res.json(reserver);
    });
  }
};

