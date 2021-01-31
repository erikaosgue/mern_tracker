const router = require('express').Router();
let Exercise = require('../models/exercise.model');


// localhost:5000/exercises/
router.route('/').get((req, res) => {
  Exercise.find()
  .then(exercise => res.json(exercise))
  .catch(err => res.status(400).json('Error: ' + err))
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

// return the exercise by id
router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
  .then(exercise => res.json(exercise))
  .catch(err => res.status(400).json('Error: ' + err))
});

// delete the exercise by id
router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
  .then(() => res.json('Exercise deleted.'))
  .catch(err => res.status(400).json('Error: ' + err))
})

// update an exercise by id
router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
  .then(exercise => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    //save the exercise with new information
    exercise.save()
    .then(() => res.json('Exercise updated!'))
    .catch(err => res.status(400).json('Error: ' + err))
  })
  .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;
