import { Router } from 'express'
import * as todosCtrl from "../controllers/todos.js"
const router = Router()

/* GET todos listing. */

// localhost:3000/todos
router.get('/', todosCtrl.index)

// localhost:3000/todos/new
router.get("/new", todosCtrl.new)

// localhost:3000/todos/:id
// localhost:3000/todos/taco
// localhost:3000/todos/15644165
// localhost:3000/todos/banana
router.get("/:id", todosCtrl.show)


export {
  router
}
