import * as todoDb from "../data/todo-db.js"

function index(req, res) {
  todoDb.find({}, function(error, todos) {
    res.render('todos/index', {
      todos: todos,
      error: error
    })
  })
}

function show(req, res) {
  console.log(req.params.id)
  todoDb.findById(req.params.id, function(error, todo) {
    console.log(todo)
    res.render("todos/show", {
      todo: todo,
      error: error
    })
  })
}

export {
  index,
  show
}