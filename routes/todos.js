import { Router } from 'express'
const router = Router()

/* GET todos listing. */

// localhost:3000/todos
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

export {
  router
}
