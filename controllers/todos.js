import * as todoDb from "../data/todo-db.js"

function index(req, res) {
  console.log(req.time)
  todoDb.find({}, function(error, todos) {
    res.render('todos/index', {
      todos: todos,
      error: error,
      time: req.time
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

function newTodo(req, res) {
  res.render("todos/new")
}

function create(req, res) {
  console.log(req.body)
  todoDb.create(req.body, function(error, todo) {
    res.redirect("/todos")
  })
}

export {
  index,
  show,
  newTodo as new,
  create
}