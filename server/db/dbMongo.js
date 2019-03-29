var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/myapp');

  var movieSchema = new Schema({
    id: false,
    _id: Number,
    title: {
      type: String,
      default: null
    },
    title_url: String,
    tmdb_poster_path: String,
    tmdb_backdrop_path: String
  });

  movieSchema.Index( { title: 1 } );

  var criticSchema = new Schema({
    id: false,
    _id: Number,
    top_critic: {
      type: Number,
      default: null,
      min: 0,
      max: 1
    },
    name: {
      type: String,
      default: null
    },
    img_url: String,
    organization: {
      type: String,
      default: null
    },
  });

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

  db.Index( { name: 1 } );
