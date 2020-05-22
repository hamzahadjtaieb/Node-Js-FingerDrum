'use strict';

var commentaire = require('../models/commModel.js');



exports.read_commentaire = function (req, res) {
  commentaire.getreadcommentaire(req.params.id, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.create_commentaire = function (req, res) {
  var new_commentaire = new commentaire(req.body);

  //handles null error 
  if (!new_commentaire.commentaire) {

    res.status(400).send({ error: true, message: 'Please provide event/status' });

  }
  else {

    commentaire.addcommentaire(new_commentaire.commentaire, function (err, event) {

      if (err)
        res.send(err);
      res.json(commentaire);
    });
  }
};

exports.getallcomment = function (req, res) {
  commentaire.getall_comment(function (err, track) {

  console.log('controller')
  if (err)
    res.send(err);
  console.log('res', track);
  res.send(track);
});
};
