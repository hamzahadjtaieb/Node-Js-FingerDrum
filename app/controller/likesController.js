
'use strict';

var likes = require('../models/likes.js');


exports.read_Like = function (req, res) {
  likes.getreadlike(req.params.id, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};












//SIKIMI
exports.read_Like_idTrack = function (req, res) {
  likes.getreadlike_idTrack(req.params.id,req.params.id_track, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};








exports.create_likes = function (req, res) {
  var new_likes = new likes(req.body);

  //handles null error 
  if (!new_likes.likes) {

    res.status(400).send({ error: true, message: 'Please provide event/status' });

  }
  else {

    likes.addlikes(new_likes.likes, function (err, event) {

      if (err)
        res.send(err);
      res.json(likes);
    });
  }
};



exports.getalllikes = function (req, res) {
  likes.getall_likes(function (err, track) {

  console.log('controller')
  if (err)
    res.send(err);
  console.log('res', track);
  res.send(track);
});
};



