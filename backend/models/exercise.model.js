const mogoose = require('mongoose');

const Schema = mongoose.Schema;

// This is a class exerciseSchema
// This is like a class in pytohn when creating the tablas

const exerciseSchema = new Schema(
  {
    username: { 
      type: String,
      required: true,
    },
    description: { 
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
  },
  {
  timestamps: true,
  }
);

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;