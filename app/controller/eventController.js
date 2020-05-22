'use strict';

var event = require('../models/eventmodels.js');

exports.list_all_events = function (req, res) {
  event.getAllevent(function (err, event) {

    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', event);
    res.send(event);
  });
};


exports.search_all_events = function (req, res) {
  event.searchAllevent(req.params.search, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};



exports.create_event = function (req, res) {
  var new_event = new event(req.body);

  //handles null error 
  if (!new_event.event.categorie) {

    res.status(400).send({ error: true, message: 'Please provide event/status' });

  }
  else {

    event.createevent(new_event.event, function (err, event) {

      if (err)
        res.send(err);
      res.json(event);
    });
  }
};


// exports.create_event = function (req, res) {
//   var new_event = new event(req.body);

//   //handles null error 


// };


exports.read_event = function (req, res) {
  event.getevent(req.params.id, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.read_location = function (req, res) {
  event.geteventLocation(req.params.location, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.read_eventc = function (req, res) {
  event.geteventC(req.params.categorie, function (err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.update_event = function (req, res) {
  event.updateById(req.params.userId, new event(req.body), function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_event = function (req, res) {


  event.remove(req.params.id, function (err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'event successfully deleted' });
  });


};