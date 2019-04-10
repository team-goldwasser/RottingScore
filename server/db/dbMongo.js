var mongoose = require('mongoose');
var csv = require('fast-csv');
var fs = require('graceful-fs');
var movies = require('./mongoModels/movies');
var critics = require('./mongoModels/critics');
var reviews = require('./mongoModels/reviews');

mongoose.connect('mongodb://localhost:27017/ryanSDC', {useNewUrlParser: true}, () => {
  mongoose.connection.db.dropDatabase();
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  importFilm();
});

// This function is called first and saves film titles
function importFilm(){
  getMovies();
}

// Saves critic records - called from last insert of generateMovie
function importCrits(){
  getCritics();
}

// Generates critic records - called from last insert of generateMovie
function importRevs(){
  getReviews();
}

function getMovies() {
  var filmStream = fs.createReadStream(__dirname + '/seed/data_generation/movies.csv');
  var headings = {headers: true};
  var films = [];
  csv
   .fromStream(filmStream, headings)
   .on('data', function(data){
      data['filmID'] = data['newID'];
      data['title'] = data['newTitle'];
      data['title_url'] = data['newTitleURL'];
      data['tmdb_poster_path'] = data['newPoster'];
      data['tmdb_backdrop_path'] = data['newBackdrop'];
      films.push(data);
      if (films.length > 100) {
        filmStream.pause();
        movies.insertMany(films, function(err, documents) {
          if (err) throw err;
        });
        films = [];
        filmStream.resume();
    }
   })
   .on('end', function(){
      if (films.length > 0) {
        movies.insertMany(films, function(err, documents) {
          if (err) throw err;
        });
      };
      console.log('Film import complete!');
      importCrits();
   });
}

function getCritics() {
  var criticStream = fs.createReadStream(__dirname + '/seed/data_generation/critics.csv');
  var headings = {headers: true};
  var crits = [];
  csv
   .fromStream(criticStream, headings)
   .on('data', function(data){
    data['criticID'] = data['idCritic'];
    data['top_critic'] = data['topCritic'];
    data['img_url'] = data['newImage'];
    data['organization'] = data['org'];
    crits.push(data);
    if (crits.length >= 100) {
      criticStream.pause();
      critics.insertMany(crits, function(err, documents) {
        if (err) throw err;
      });
      crits = [];
      criticStream.resume();
    }
   })
   .on('end', function(){
      if (crits.length > 0) {
        critics.insertMany(crits, function(err, documents) {
          if (err) throw err;
        });
      };
      console.log('Critics import complete!');
      importRevs();
   });
}

function getReviews() {
  var reviewStream = fs.createReadStream(__dirname + '/seed/data_generation/reviews.csv');
  var headings = {headers: true};
  var revs = [];
  csv
   .fromStream(reviewStream, headings)
   .on('data', function(data){
      data['review_date'] = data['newDate'];
      data['review_text'] = data['reviewText'];
      data['movie_id'] = data['idFilm'];
      data['critic_id'] = data['idCrit'];
      data['score'] = data['rating'];
      revs.push(data);
      if (revs.length >= 100) {
        reviewStream.pause();
        reviews.insertMany(revs, function(err, documents) {
          if (err) throw err;
        })
      };
      revs = [];
      reviewStream.resume();
   })
   .on('end', function(){
      if (revs.length > 0) {
        reviews.insertMany(revs, function(err, documents) {
          if (err) throw err;
        });
      };
      db.close();
      console.log('Reviews import complete!');
   });
}
