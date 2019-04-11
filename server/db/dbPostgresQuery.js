const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'mysdc',
  host: 'localhost',
  database: 'scorecard',
  password: pgPW,
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
  const filmTitle = parseInt(request.params.name);
  pool.query('SELECT * FROM movies WHERE newTitle = $1', [filmTitle], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getCriticbyName = (request, response) => {
  const name = parseInt(request.params.name);
  pool.query('SELECT * FROM reviews LEFT JOIN critics ON ' +
    '(reviews.idCrit = critics.idCritic) WHERE critics.name = $1)', [name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getReviewsbyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM reviews WHERE idFilm = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getReviewsbyName = (request, response) => {
  const filmName = parseInt(request.params.name);
  pool.query('SELECT * FROM reviews LEFT JOIN movies ON ' +
    '(reviews.idFilm = movies.newTitle) WHERE movies.newTitle = $1 )', [filmName], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const get12ReviewsbyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM reviews WHERE idFilm = $1 LIMIT 12', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const get12ReviewsbyName = (request, response) => {
  const filmName = parseInt(request.params.name);
  pool.query('SELECT * FROM reviews LEFT JOIN movies ON ' +
    '(reviews.idFilm = movies.newTitle) WHERE movies.newTitle = $1 LIMIT 12)', [filmName], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getTopReviewsbyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM reviews WHERE idFilm = $1 LEFT JOIN critics ON ' +
    '(reviews.idCrit = critics.idCritic) WHERE critics.topCritic = $2 )', [id, 1], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getTopReviewsbyName = (request, response) => {
  const filmName = parseInt(request.params.name);
  pool.query('SELECT * FROM reviews WHERE newTitle = $1 LEFT JOIN critics ON ' +
    '(reviews.idCrit = critics.idCritic) WHERE critics.topCritic = $2 )', [filmName, 1], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const createFilm = (request, response) => {
  const { newTitle, newTitleURL, newPoster, newBackdrop } = request.body
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
  const { newTitle, newTitleURL, newPoster, newBackdrop } = request.body

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
  const filmName = parseInt(request.params.name)
  const { newTitle, newTitleURL, newPoster, newBackdrop } = request.body

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
  const id = parseInt(request.params.id)

  pool.query('DELETE * FROM movies WHERE newID = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`${results.newTitle} has been deleted from film database!`)
  })
}

const deleteFilmbyName = (request, response) => {
  const filmName = parseInt(request.params.name)

  pool.query('DELETE * FROM movies WHERE newTitle = $1', [filmName], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`${results.newTitle} has been deleted from film database!`)
  })
}

const createCritic = (request, response) => {
  const { topCritic, name, newImage, org } = request.body
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
  const nameCritic = parseInt(request.params.name)
  const { topCritic, name, newImage, org } = request.body

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
  const nameCritic = parseInt(request.params.name)

  pool.query('DELETE FROM critics WHERE name = $1', [nameCritic], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`${results.name} has been deleted.`)
  })
}

const createReview = (request, response) => {
  const { newDate, fresh, reviewText, idFilm, idCrit, rating } = request.body
  pool.query('INSERT INTO reviews (newDate, fresh, reviewText, idFilm, idCrit, rating) ' +
    'VALUES ($1, $2, $3, $4, $5, $6)', [newDate, fresh, reviewText, idFilm, idCrit, rating],
    (error, results) => {
      if (error) {
        throw error
    }
    response.status(201).send(`Review added for ${results.newTitle}`)
  })
}

const updateReview = (request, response) => {
  const reviewID = parseInt(request.params.id)
  const { newDate, fresh, reviewText, idFilm, idCrit, rating } = request.body

  pool.query(
    'UPDATE reviews SET newDate = $2, fresh = $3, reviewText = $4, idFilm = $5, idCrit = $6, ' +
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
  const reviewID = parseInt(request.params.id)

  pool.query('DELETE FROM reviews WHERE reviewID = $1', [reviewID], (error, results) => {
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