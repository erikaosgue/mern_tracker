const router = require('express').Router();

//import the User class from user.model file
let User = require('../models/user.model');

// first endpoint that handdles incomming http get request
// localhost:5000/users/
router.route('/').get((req, res) => {
  
  // find() is a mongoose method that will get a list of all the user from the mongoDB atlas database
  // find returns a promise
  // then will be returnning a response in JSON format with a list of all users
  User.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

// Second Endpoint handles incomming http post request
// localhost:5000/users/add
router.route('/add').post((req, res) => {

  const username = req.body.username

  // create a object newUser from class User
  const newUser = new User({ username });

  // Saving the newUser object into mongoDB
  newUser.save()
  .then(() => res.json('User added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;