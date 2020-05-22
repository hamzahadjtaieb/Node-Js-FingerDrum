'use strict';

var book = require('../models/bookmodels.js');


exports.book_event = function (req, res) {
  var bookEvent = new book(req.body);

  //handles null error 
  book.bookevent(bookEvent, function (err, bookR) {

    if (err)
      res.send(err);
    res.json(bookR);
  });
};
exports.get_book = function (req, res) {
  var bookEvent = new book(req.body);

  //handles null error 
  book.getBooking(req.params.idUser, function (err, bookR) {

    if (err)
      res.send(err);
    res.json(bookR);
  });
};


