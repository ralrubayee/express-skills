import * as skillDb from "../data/skills.js"
//skill
function index(req, res) {
  console.log(req.time)
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error,
      time: req.time
    })
  })
}

function show(req, res) {
  console.log(req.params.id)
  skillDb.findById(req.params.id, function(error, skill) {
    console.log(skill)
    res.render("skills/show", {
      skill: skill,
      error: error
    })
  })
}

function newskill(req, res) {
  res.render("skills/new")
}

function create(req, res) {
  console.log(req.body)
  skillDb.create(req.body, function(error, skill) {
    res.redirect("/skills")
  })
}

function deleteskill(req, res) {
  skillDb.findByIdAndDelete(req.params.id, function(error, skill) {
    res.redirect("/skills")
  })
}

export {
  index,
  show,
  newskill as new,
  create,
  deleteskill as delete
}