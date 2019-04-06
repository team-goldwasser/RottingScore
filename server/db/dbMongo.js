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
function importFilm(append, rowsRead){
  if (!append) {
    var append;
  };
  if (!rowsRead) {
    var rowsRead;
  };
  getMovies(append, rowsRead);
}

// Saves critic records - called from last iteration of generateMovie
function importCrits(append, rowsRead){
  if (!append) {
    var append;
  };
  if (!rowsRead) {
    var rowsRead;
  };
  getCritics(append, rowsRead);
}

// Generates critic records - called from last iteration of generateMovie
function importRevs(append, rowsRead){
  if (!append) {
    var append;
  };
  if (!rowsRead) {
    var rowsRead;
  };
  getReviews(append, rowsRead);
}

function getMovies(append, rowsRead) {
  if (!append) {
    var filmStream = fs.createReadStream(__dirname + '/seed/data_generation/movies.csv');
    var headings = {headers: true};
    rowsRead = 0;
    var rowsAdded = 1;
  } else {
    var filmStream = fs.createReadStream(__dirname + '/seed/data_generation/movies.csv');
    var headings = {headers: false};
    var rowsAdded = 100;
    console.log('TWO!!!!!');
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
      console.log('LENGTH', films.length);
      if (films.length >= 100 && rowsAdded <= rowsRead) {
        films = [];
        rowsAdded += 100;
      };
      if (films.length >= 100 && rowsAdded > rowsRead) {
        movies.insertMany(films, function(err, documents) {
          if (err) throw err;
          rowsRead = rowsRead + 100;
          filmStream.pause();
          films = [];
          append = true;
          console.log('ROWS', rowsRead);
          importFilm(append, rowsRead);
        });
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

function getCritics(append, rowsRead) {
  if (!append) {
    var criticStream = fs.createReadStream(__dirname + '/seed/data_generation/critics.csv');
    var headings = {headers: true};
    rowsRead = 0;
    var rowsAdded = 1;
  } else {
    var criticStream = fs.createReadStream(__dirname + '/seed/data_generation/critics.csv');
    var headings = {headers: false};
    var rowsAdded = 100;
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
    if (crits.length >= 100 && rowsAdded <= rowsRead) {
      crits = [];
      rowsAdded += 100;
    }
    if (crits.length >= 100 && (rowsAdded > rowsRead || rowsRead === 0)) {
      critics.insertMany(crits, function(err, documents) {
        if (err) throw err;
        criticStream.pause();
        crits = [];
        append = true;
        rowsRead += 100;
        importCrits(append, rowsRead);
      });
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

function getReviews(append, rowsRead) {
  if (!append) {
    var reviewStream = fs.createReadStream(__dirname + '/seed/data_generation/reviews.csv');
    var headings = {headers: true};
    rowsRead = 0;
    var rowsAdded = 1;
  } else {
    var reviewStream = fs.createReadStream(__dirname + '/seed/data_generation/reviews.csv');
    var headings = {headers: false};
    var rowsAdded = 0;
  }
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
      if (revs.length >= 100 && rowsAdded <= rowsRead) {
        revs = [];
        rowsAdded += 100;
      }
      if (revs.length >= 100 && (rowsAdded > rowsRead || rowsRead === 0)) {
        reviews.insertMany(revs, function(err, documents) {
          if (err) {
            throw err;
          }
        })
        reviewStream.pause();
        revs = [];
        rowsRead += 100;
        append = true;
        importRevs(append, rowsRead);
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
