'use strict';
module.exports = function(app) {
  var todoList = require('../controller/appcontroller');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);
   
   app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
   
    app.route('/users')
    .get(todoList.list_all_users)
    .post(todoList.create_a_user);
   
   app.route('/users/:userId')
    .get(todoList.read_a_user)
    .put(todoList.update_a_user)
    .delete(todoList.delete_a_user);
    };