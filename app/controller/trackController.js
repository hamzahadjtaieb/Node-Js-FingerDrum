'use strict';

var track = require('../models/trackModels.js');

exports.list_all_track = function (req, res) {
    track.getAlltrack(function (err, track) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', track);
    res.send(track);
  });
};


exports.search_all_tracks = function (req, res) {
    track.searchAlltrack(req.params.search, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  };
  
  
  
  exports.create_track = function (req, res) {
    var new_track = new track(req.body);
  
    //handles null error 
    if (!new_track.track.categorie) {
  
      res.status(400).send({ error: true, message: 'Please provide track/status' });
  
    }
    else {
  
      track.createtrack(new_track.track, function (err, track) {
  
        if (err)
          res.send(err);
        res.json(track);
      });
    }
  };


  exports.read_track = function (req, res) {
    track.gettrack(req.params.id, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  };
  
  
  //read_location
  exports.read_genre = function (req, res) {
    track.gettrackGenre(req.params.genre, function (err, data) {
      if (err)
        res.send(err);
      res.json(data);
    });
  };
  
//   exports.read_eventc = function (req, res) {
//     track.geteventC(req.params.categorie, function (err, data) {
//       if (err)
//         res.send(err);
//       res.json(data);
//     });
//   };
  
  
//userId hases elli fiha mochkla
  exports.update_track = function (req, res) {
    track.updateById(req.params.track, new track(req.body), function (err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };
  
  
  exports.delete_track = function (req, res) {
  
  
    track.remove(req.params.id, function (err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'track successfully deleted' });
    });
  
  
  };