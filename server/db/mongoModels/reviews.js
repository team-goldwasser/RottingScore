var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var reviewSchema = new Schema({
    id: false,
    _id: Number,
    review_date: {
      type: Date,
      default: null
    },
    fresh: {
      type: Number,
      min: 0,
      max: 1,
      default: 0
    },
    review_text: {
      type: String,
      default: null
    },
    movie_id: {
      type: Number,
      default: null,
    },
    critic_id: {
      type: Number,
      default: null
    },
    score: {
      type: Number,
      default: null,
      min: 0,
      max: 10
    },
  });

  module.exports = mongoose.model('reviews', reviewSchema);