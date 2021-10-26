import * as todoDb from "../data/todo-db.js"

function index(req, res) {
  todoDb.find({}, function(error, todos) {
    res.render('todos/index', {
      todos: todos,
      error: error
    })
  })
}

export {
  index
}