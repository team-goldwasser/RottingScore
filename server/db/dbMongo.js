var mongoose = require('mongoose');
var csv = require('fast-csv');
var fs = require('graceful-fs');
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
function importFilm(append){
  if (!append) {
    var append;
  }
  getMovies(append);
}

// Saves critic records - called from last iteration of generateMovie
function importCrits(append){
  if (!append) {
    var append;
  }
  getCritics(append);
}

// Generates critic records - called from last iteration of generateMovie
function importRevs(append, reviewStream){
  if (!append) {
    var append;
  }
  if (!reviewStream) {
    var reviewStream;
  }

  getReviews(append, reviewStream);
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
      data['filmID'] = data['newID'];
      data['title'] = data['newTitle'];
      data['title_url'] = data['newTitleURL'];
      data['tmdb_poster_path'] = data['newPoster'];
      data['tmdb_backdrop_path'] = data['newBackdrop'];
      films.push(data);
      if (films.length > 100) {
        movies.insertMany(films, function(err, documents) {
          if (err) throw err;
        });
        filmStream.pause();
        films = [];
        append = true;
        importFilm(append);
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

function getCritics(append) {
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
    data['criticID'] = data['idCritic'];
    data['top_critic'] = data['topCritic'];
    data['img_url'] = data['newImage'];
    data['organization'] = data['org'];
    crits.push(data);
      if (crits.length > 100) {
        critics.insertMany(crits, function(err, documents) {
          if (err) throw err;
        });
        criticStream.pause();
        crits = [];
        append = true;
        importCrits(append);
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

function getReviews(append, reviewStream) {
  if (!append) {
    console.log('START');
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
    // console.log('Seeding Review # ' + data['reviewID'] );
    data['review_date'] = data['newDate'];
      data['review_text'] = data['reviewText'];
      data['movie_id'] = data['idFilm'];
      data['critic_id'] = data['idCrit'];
      data['score'] = data['rating'];
      revs.push(data);
      if (revs.length > 100) {
        reviews.insertMany(revs, function(err, documents) {
          if (err) {
            var idBox = [];
            for (var i = 0; i < revs.length; i++){
              idBox.push(revs[i]['_id']);
            }
            throw err;
          }
        });
        reviewStream.pause();
        revs = [];
        append = true;
        importRevs(append, reviewStream);
      }
   })
   .on('end', function(){
      if (revs.length > 0) {
        reviews.insertMany(revs, function(err, documents) {
          if (err) throw err;
        });
      };
      console.log('Reviews import complete!');
   });
}