const express = require('express');
const express_static = require('express-static');
const app = express();
const PORT = 9001;
const knex = require('./db/config.js').knex;



app.get('/movie/movieinfo/:id', function (req, res, next) {
  var whereClause;
  if (req.params['id'] && !(isNaN(Number(req.params['id'])))) {
    whereClause = {id: Number(req.params['id'])};
  } else if (req.params['id'] && (isNaN(Number(req.params['id'])))) {
    whereClause = {title_url: req.params['id']};
  } else {
    res.send({id: 0, title: 'not a movie in db', title_url: 'not_a_movie_in_db' });
    return;
  }

  knex('movies').select().where(whereClause)
  .then(function (results) {
    res.send({id: results[0].id, title: results[0].title, title_url: results[0].title_url });
  })
  .catch(function (error) {
    if (error) {
      console.log(error);
      res.send({id: 0, title: 'not a movie in db', title_url: 'not_a_movie_in_db' });
    }
  });
});

app.get('/cr/tomatometer/:id', function (req, res, next) {

  var whereClause;
  if (req.params['id'] && !(isNaN(Number(req.params['id'])))) {
    whereClause = {id: Number(req.params['id'])};
  } else if (req.params['id'] && (isNaN(Number(req.params['id'])))) {
    whereClause = {title_url: req.params['id']};
  } else {
    res.send({
      "id": 0,
      "title_url": "error_not_a_title_in_db",
      "tomatometer": 0.0,
      "avgrating": 0.0,
      "numOfReviews": 0,
      "fresh": 0,
      "rotten": 0,
      "randomReview": "Well, the way they make a shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and b..."
  });
    return;
  }

  var title_url;
  var movie_id;
  knex('movies').select().where(whereClause)
  .then(function (results) {
    title_url = results[0].title_url;
    movie_id = results[0].id;
    return knex('critic_reviews').select('*').avg('score as score_avg').avg('fresh as tomatometer').count('fresh as review_count').where({movie_id: movie_id})

  })
  .then(function (results) {
    res.send({
      id: results[0].movie_id,
      title_url: title_url,
      tomatometer: Math.round(results[0].tomatometer * 1000)/10,
      avgrating: results[0].score_avg,
      numOfReviews: results[0].review_count,
      fresh: Math.floor(results[0].tomatometer * results[0].review_count),
      rotten: (results[0].review_count - Math.floor(results[0].tomatometer * results[0].review_count)),
      randomReview: (results[0].review_text)
    });
  })
  .catch(function (error) {
    if (error) {
      console.log(error);
      res.send({
        "id": 0,
        "title_url": "error_not_a_title_in_db",
        "tomatometer": 0.0,
        "avgrating": 0.0,
        "numOfReviews": 0,
        "fresh": 0,
        "rotten": 0,
        "randomReview": "Well, the way they make a shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and b..."
    });
    }
  });

});

app.use(express_static(__dirname + './../public'));
app.listen(PORT, function() {
  console.log(`RT Scoreboard listening on port ${PORT}!`)
});