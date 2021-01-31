const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, //Will trim whitespaces at the end
      minlength: 3 //at leat three characters long
    },
  }, 
  {
    timestamps: true //Create field for: when it was created, and when was modified
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;