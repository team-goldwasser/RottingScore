const express = require('express');
const express_static = require('express-static');
const app = express();
const db = require('./db/db.js');
const cors = require('cors');

app.use(cors());

app.get('/m/movieinfo/:id', function (req, res, next) {
  if (req.params && req.params['id']) {
    db.getMovieInfo(req.params['id'])
      .then(function (results) {
        if (results[0].id === 284054) {
          var backdrop = 'https://image.tmdb.org/t/p/w780/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg';
          var poster = 'https://image.tmdb.org/t/p/w342/uxzzxijgPIY7slzFvMotPv8wjKA.jpg';
          var video = 'xjDjIWPwcPU';
        } else {
          var backdrop = 'http://lorempixel.com/740/290/nightlife/';
          var poster = 'http://lorempixel.com/342/513/people';
          var video = 'dQw4w9WgXcQ';
        }
        res.send({id: results[0].id, title: results[0].title, title_url: results[0].title_url, video: video, poster_url:poster, backdrop_url: backdrop });
      })
      .catch(function (error) {
        if (error) {
          res.send({id: 0, title: 'not a movie in db', title_url: 'not_a_movie_in_db', video: 'dQw4w9WgXcQ', poster_url:'http://lorempixel.com/342/513/people', backdrop_url: 'http://lorempixel.com/780/439/nightlife/'});
        }
      });
  } else {
    res.send({id: 0, title: 'not a movie in db', title_url: 'not_a_movie_in_db', video: 'dQw4w9WgXcQ', poster_url:'http://lorempixel.com/342/513/people', backdrop_url: 'http://lorempixel.com/780/439/nightlife/'});
  }

});

app.get('/m/movieinfo', function (req, res, next) {
  res.send({id: 0, title: 'not a movie in db', title_url: 'not_a_movie_in_db', video: 'dQw4w9WgXcQ', poster_url:'http://lorempixel.com/342/513/people', backdrop_url: 'http://lorempixel.com/780/439/nightlife/'});
});

app.get('/cr/tomotometer/:id', function (req, res, next) {

  if (req.params && req.params['id']) {
    var title_url;
    var movie_id;
    db.getMovieInfo(req.params['id'])
      .then(function (results) {
        title_url = results[0].title_url;
        movie_id = results[0].id;
        return db.getTomatoMeter(movie_id);
      })
      .then(function (results) {
        res.send({
          id: movie_id,
          title_url: title_url,
          tomatometer: Math.round(results[0].tomatometer * 1000) / 10, //take the tomatometer out of 1.0 and set it out of 100
          avgrating: Math.round(results[0].score_avg*10)/10,
          numOfReviews: results[0].review_count,
          fresh: Math.floor(results[0].tomatometer * results[0].review_count), //calculuate # of fresh
          rotten: (results[0].review_count - Math.floor(results[0].tomatometer * results[0].review_count)), //calculuate # of rotten
          randomReview: (results[0].review_text)
        });
      })
      .catch(function (error) {
        if (error) {
          res.send({
            'id': 0,
            'title_url': 'error_not_a_title_in_db',
            'tomatometer': 0.0,
            'avgrating': 0.0,
            'numOfReviews': 0,
            'fresh': 0,
            'rotten': 0,
            'randomReview': 'Well, the way they make a shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and b...'
          });
        }
      });
  } else {
    res.send({
      'id': 0,
      'title_url': 'error_not_a_title_in_db',
      'tomatometer': 0.0,
      'avgrating': 0.0,
      'numOfReviews': 0,
      'fresh': 0,
      'rotten': 0,
      'randomReview': 'Well, the way they make a shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and b...'
    });
  }

});

app.get('/cr/tomotometer', function (req, res, next) {
  res.send({
    'id': 0,
    'title_url': 'error_not_a_title_in_db',
    'tomatometer': 0.0,
    'avgrating': 0.0,
    'numOfReviews': 0,
    'fresh': 0,
    'rotten': 0,
    'randomReview': 'Well, the way they make a shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and b...'
  });
});

app.get('/cr/topcriticmeter/:id', function (req, res, next) {

  if (req.params && req.params['id']) {
    var title_url;
    var movie_id;
    db.getMovieInfo(req.params['id'])
      .then(function (results) {
        title_url = results[0].title_url;
        movie_id = results[0].id;
        return db.getTopCriticMeter(movie_id);
      })
      .then(function (results) {
        res.send({
          id: movie_id,
          title_url: title_url,
          tomatometer: Math.round(results[0].tomatometer * 1000) / 10, //take the tomatometer out of 1.0 and set it out of 100
          avgrating: Math.round(results[0].score_avg*10)/10,
          numOfReviews: results[0].review_count,
          fresh: Math.floor(results[0].tomatometer * results[0].review_count), //calculuate # of fresh
          rotten: (results[0].review_count - Math.floor(results[0].tomatometer * results[0].review_count)), //calculuate # of rotten
          randomReview: (results[0].review_text)
        });
      })
      .catch(function (error) {
        if (error) {
          console.log(error);
          res.send({
            'id': 0,
            'title_url': 'error_not_a_title_in_db',
            'tomatometer': 0.0,
            'avgrating': 0.0,
            'numOfReviews': 0,
            'fresh': 0,
            'rotten': 0,
            'randomReview': 'Well, the way they make a shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and b...'
          });
        }
      });
  } else {
    res.send({
      'id': 0,
      'title_url': 'error_not_a_title_in_db',
      'tomatometer': 0.0,
      'avgrating': 0.0,
      'numOfReviews': 0,
      'fresh': 0,
      'rotten': 0,
      'randomReview': 'Well, the way they make a shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and b...'
    });
  }

});

app.get('/cr/criticmeter', function (req, res, next) {
  res.send({
    'id': 0,
    'title_url': 'error_not_a_title_in_db',
    'tomatometer': 0.0,
    'avgrating': 0.0,
    'numOfReviews': 0,
    'fresh': 0,
    'rotten': 0,
    'randomReview': 'Well, the way they make a shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and b...'
  });
});

app.use('/assets', express_static('./Scoreboard/dist/Scoreboard/assets/'));


module.exports = app;