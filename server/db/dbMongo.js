var mongoose = require('mongoose');
var csv = require('fast-csv');
var fs = require('fs');
var movies = require('./mongoModels/movies');
var critics = require('./mongoModels/critics');
var reviews = require('./mongoModels/reviews');

mongoose.connect('mongodb://localhost:27017/ryanSDC', {useNewUrlParser: true}, () => {
  mongoose.connection.db.dropDatabase();
});
// { useMongoClient: true }

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  importFilm();
});

// This function is called first and saves film titles
function importFilm(){
  getMovies(append);
}

// Saves critic records - called from last iteration of generateMovie
function importCrits(){
  getCritics(append);
}

// Generates critic records - called from last iteration of generateMovie
function importRevs(){
  getReviews(append);
}

function getMovies(append) {
  if (!append) {
    var filmStream = fs.createReadStream(__dirname + '/seed/data_generation/movies2.csv');
    var headings = {headers: true};
  } else {
    filmStream.resume();
    var headings = {headers: false};
  }
  var films = [];
  var append;
  csv
   .fromStream(filmStream, headings)
   .on('data', function(data){
      data['_id'] = data['newID'];
      films.push(data);
      if (films.length > 100) {
        movies.create(films, function(err, documents) {
          if (err) throw err;
        });
        filmStream.pause();
        films = [];
        importFilm(append);
      }
   })
   .on('end', function(){
      if (films.length > 0) {
        movies.create(films, function(err, documents) {
          if (err) throw err;
        });
      };
      console.log('Film import complete!');
      importCrits();
   });
}

function getCritics() {
  if (!append) {
    var criticStream = fs.createReadStream(__dirname + '/seed/data_generation/critics2.csv');
    var headings = {headers: true};
  } else {
    criticStream.resume();
    var headings = {headers: false};
  }
  var crits = [];
  csv
   .fromStream(criticStream, headings)
   .on('data', function(data){
      data['_id'] = data['idCritic'];
      crits.push(data);
      if (crits.length > 100) {
        critics.create(crits, function(err, documents) {
          if (err) throw err;
        });
        criticStream.pause();
        crits = [];
        importCrits(append);
      }
   })
   .on('end', function(){
      if (crits.length > 0) {
        critics.create(crits, function(err, documents) {
          if (err) throw err;
        });
      };
      console.log('Critics import complete!');
      importRevs();
   });
}

function getReviews() {
  if (!append) {
    var reviewStream = fs.createReadStream(__dirname + '/seed/data_generation/reviews2.csv');
    var headings = {headers: true};
  } else {
    reviewStream.resume();
    var headings = {headers: false};
  }
  var revs = [];
  csv
   .fromStream(reviewStream, headings)
   .on('data', function(data){
      data['_id'] = data['reviewID'];
      revs.push(data);
      if (revs.length > 100) {
        reviews.create(revs, function(err, documents) {
          if (err) throw err;
        });
        reviewStream.pause();
        revs = [];
        importRevs(append);
      }
   })
   .on('end', function(){
      if (revs.length > 0) {
        reviews.create(revs, function(err, documents) {
          if (err) throw err;
        });
      };
      console.log('Reviews import complete!');
   });
}