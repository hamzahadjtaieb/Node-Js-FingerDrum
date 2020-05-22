'use strict';
module.exports = function(app) {
  var todoList = require('../controller/eventController');

  // todoList Routes
  app.route('/event')
    .get(todoList.list_all_events)
    .post(todoList.create_event);
   
   app.route('/event/:id')
    .get(todoList.read_event)
    .put(todoList.update_event)
    .delete(todoList.delete_event);

    app.route('/event/:id/:categorie')
    .get(todoList.read_event)

    
   
    };