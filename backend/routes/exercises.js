const router = require('express').Router();
let Exercise = require('../models/exercise.model');


// localhost:5000/exercises/
router.route('/').get((req, res) => {
  Exercise.find()
  .then(exercise => res.json(exercise))
  .catch(err => res.status(400), json('Error: ' + err))
});

// localhost:5000/exercises/add
router.route('/add').post((req, res) => {

    const username = req.body.username;
    const description = req.body.description
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise(
      {
        username,
        description,
        duration,
        date
      }
    );

    // Saving the newExercise object into mongoBD
    newExercise.save()
    .then(() => res.json('Exercise created!'))
    .catch(err => res.status(400).json('Error: '+ err))
});

module.exports = router;
