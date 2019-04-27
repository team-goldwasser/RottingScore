var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var movieSchema = new Schema({
    filmID: Number,
    title: {
      type: String,
      default: null
    },
    title_url: String,
    tmdb_poster_path: String,
    tmdb_backdrop_path: String
  });

  movieSchema.index( { title: 1 } );

  module.exports = mongoose.model('movies', movieSchema);