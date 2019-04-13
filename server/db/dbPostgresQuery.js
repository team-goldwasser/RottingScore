var dbHost = require('./database_env').dbHost;
var dbPassword = require('./database_env').dbPassword;

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'mysdc',
  host: dbHost,
  database: 'scorecard',
  password: dbPassword,
  port: 5432,
})

const getMovieInfobyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM movies WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getMovieInfobyName = (request, response) => {
  const filmTitle = request.params.name;
  pool.query('SELECT * FROM movies WHERE title = $1', [filmTitle], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getCriticbyName = (request, response) => {
  const name = request.params.name;
  pool.query('SELECT * FROM critic_reviews WHERE critic_id = ' +
    '(SELECT id FROM critics WHERE name = $1)', [name], (error, results) => {
    if (error) {
      console.log(results, error);
      throw error;
    }
    response.status(200).json(results.rows)
  })
};

const getReviewsbyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM critic_reviews WHERE movie_id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getReviewsbyName = (request, response) => {
  const filmName = request.params.name;
  pool.query('SELECT * FROM critic_reviews WHERE movie_id = ' +
    '(SELECT id FROM movies WHERE title = $1)', [filmName], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const get12ReviewsbyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM critic_reviews WHERE movie_id = $1 LIMIT 12', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const get12ReviewsbyName = (request, response) => {
  const filmName = request.params.name;
  pool.query('(SELECT * FROM critic_reviews WHERE movie_id = ' +
  '(SELECT id FROM movies WHERE title = $1)) LIMIT 12', [filmName], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getTopReviewsbyID = (request, response) => {
  const id = parseInt(request.params.id);
  const topC = 1;
  pool.query('SELECT * FROM critic_reviews JOIN critics ON (critic_reviews.critic_id = critics.id) ' +
    'WHERE critics.top_Critic = 1 AND critic_reviews.movie_id = $1', [id], (error, results) => {
    if (error) {
      console.log(error);
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getTopReviewsbyName = (request, response) => {
  const filmName = request.params.name;
  pool.query('SELECT * FROM critic_reviews JOIN critics ON (critic_reviews.critic_id = critics.id) ' +
  'WHERE critics.top_Critic = 1 AND critic_reviews.movie_id = (SELECT id FROM movies WHERE title = $1)',
  [filmName], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const createFilm = (request, response) => {
  const { newTitle, newTitleURL, newPoster, newBackdrop } = request.body;
  pool.query('INSERT INTO movies (newTitle, newTitleURL, newPoster, newBackdrop) ' +
    'VALUES ($1, $2, $3, $4)', [newTitle, newTitleURL, newPoster, newBackdrop],
    (error, results) => {
      if (error) {
        throw error
    }
    response.status(201).send(`${results.newTitle} has been added to film database!`)
  })
}

const updateFilmbyID = (request, response) => {
  const id = parseInt(request.params.id)
  const { newTitle, newTitleURL, newPoster, newBackdrop } = request.body;
  pool.query(
    'UPDATE movies SET newTitle = $2, newTitleURL = $3, newPoster = $4, newBackdrop = $5 ' +
      'WHERE newID = $1',
    [id, newTitle, newTitleURL, newPoster, newBackdrop],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`${results.newTitle} has been modified.`)
    }
  )
}

const updateFilmbyName = (request, response) => {
  const filmName = request.params.name;
  const { newTitle, newTitleURL, newPoster, newBackdrop } = request.body;
  pool.query(
    'UPDATE movies SET newTitle = $2, newTitleURL = $3, newPoster = $4, newBackdrop = $5 ' +
      'WHERE newTitle = $1',
    [filmName, newTitle, newTitleURL, newPoster, newBackdrop],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`${results.newTitle} has been modified.`)
    }
  )
}

const deleteFilmbyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('DELETE * FROM movies WHERE newID = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`${results.newTitle} has been deleted from film database!`)
  })
}

const deleteFilmbyName = (request, response) => {
  const filmName = request.params.name;
  pool.query('DELETE * FROM movies WHERE newTitle = $1', [filmName], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`${results.newTitle} has been deleted from film database!`)
  })
}

const createCritic = (request, response) => {
  const { topCritic, name, newImage, org } = request.body;
  pool.query('INSERT INTO critics (topCritic, name, newImage, org) ' +
    'VALUES ($1, $2, $3, $4)', [topCritic, name, newImage, org],
    (error, results) => {
      if (error) {
        throw error
    }
    response.status(201).send(`${results.name} has been added to critics database!`)
  })
}

const updateCritic = (request, response) => {
  const nameCritic = request.params.name;
  const { topCritic, name, newImage, org } = request.body;
  pool.query(
    'UPDATE critics SET topCritic = $2, name = $3, newImage = $4, org = $5' +
      'WHERE name = $1',
    [nameCritic, topCritic, name, newImage, org],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`${results.name}'s profile has been modified.`)
    }
  )
}

const deleteCritic = (request, response) => {
  const nameCritic = request.params.name;
  pool.query('DELETE FROM critics WHERE name = $1', [nameCritic], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`${results.name} has been deleted.`)
  })
}

const createReview = (request, response) => {
  const { newDate, fresh, reviewText, idFilm, idCrit, rating } = request.body;
  pool.query('INSERT INTO critic_reviews (newDate, fresh, reviewText, idFilm, idCrit, rating) ' +
    'VALUES ($1, $2, $3, $4, $5, $6)', [newDate, fresh, reviewText, idFilm, idCrit, rating],
    (error, results) => {
      if (error) {
        throw error
    }
    response.status(201).send(`Review added for ${results.newTitle}`)
  })
}

const updateReview = (request, response) => {
  const reviewID = parseInt(request.params.id);
  const { newDate, fresh, reviewText, idFilm, idCrit, rating } = request.body
  pool.query(
    'UPDATE critic_reviews SET newDate = $2, fresh = $3, reviewText = $4, idFilm = $5, idCrit = $6, ' +
      'rating = $7 WHERE reviewID = $1',
    [reviewID, newDate, fresh, reviewText, idFilm, idCrit, rating],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`${results.newTitle} review modified`)
    }
  )
}

const deleteReview = (request, response) => {
  const reviewID = parseInt(request.params.id);
  pool.query('DELETE FROM critic_reviews WHERE reviewID = $1', [reviewID], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`${results.newTitle} review deleted`)
  })
}

module.exports = {
  getMovieInfobyID,
  getMovieInfobyName,
  getCriticbyName,
  getReviewsbyID,
  getReviewsbyName,
  getTopReviewsbyName,
  getTopReviewsbyID,
  get12ReviewsbyID,
  get12ReviewsbyName,
  createFilm,
  updateFilmbyID,
  updateFilmbyName,
  deleteFilmbyID,
  deleteFilmbyName,
  createCritic,
  updateCritic,
  deleteCritic,
  createReview,
  updateReview,
  deleteReview,
}