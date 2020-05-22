
'use strict';

var user = require('../models/usermodels.js');

exports.list_all_users = function(req, res) {
  user.getAlluser(function(err, user) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', user);
    res.send(user);
  });
};



exports.read_a_userR = function (req, res) {
  user.getuserR(req.params.userId, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

//Les Compositeurs
exports.get_LesCompositeurs = function(req, res) {
  user.getCompositeur(function(err, user) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', user);
    res.send(user);
  });
};

//Les Amateurs
exports.get_LesAmateurs = function(req, res) {
  user.getAmateur(function(err, user) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', user);
    res.send(user);
  });
};



exports.
create_a_user = function(req, res) {
  console.log("Create user called / data :"+req.body);
  var new_user = new user(req.body);

  user.createuser(new_user.user, function(err, user) {
    
    if (err)
      res.send(err);
    res.json(user);
  });
  
};


exports.read_a_user = function(req, res) {
  user.login(req.params.userName,req.params.password, function(err, user) {
    if (err)
      res.send(err);
    res.json(user[0]);
  });
};


exports.update_a_user = function(req, res) {
  user.updateById(req.params.userId, new user(req.body), function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {
  user.remove( req.params.userId, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'user successfully deleted' });
  });
};