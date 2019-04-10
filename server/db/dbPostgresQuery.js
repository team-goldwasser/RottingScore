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
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM movies WHERE id = $1 _______________', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getCriticbyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM critics WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getCriticbyName = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM critics WHERE id = $1 _______________', [id], (error, results) => {
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
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM reviews WHERE ______________ = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getTopReviewsbyID = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM reviews WHERE idFilm = $1 AND __________', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const getTopReviewsbyName = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM reviews WHERE idFilm = $1 AND __________', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const createFilm = (request, response) => {
  const { newID, newTitle, newTitleURL, newPoster, newBackdrop } = request.body
  pool.query('INSERT INTO movies (newID, newTitle, newTitleURL, newPoster, newBackdrop) ' +
    'VALUES ($1, $2, $3, $4, $5)', [newID, newTitle, newTitleURL, newPoster, newBackdrop],
    (error, results) => {
      if (error) {
        throw error
    }
    response.status(201).send(`Film added with ID: ${result.insertId}`)
  })
}

const updateFilm = (request, response) => {
  const id = parseInt(request.params.id)
  const { newID, newTitle, newTitleURL, newPoster, newBackdrop } = request.body

  pool.query(
    'UPDATE movies SET newID = $1, newTitle = $2, newTitleURL = $3, newPoster = $4, newBackdrop = $5',
    [newID, newTitle, newTitleURL, newPoster, newBackdrop],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Film modified with ID: ${id}`)
    }
  )
}

const deleteFilm = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM movies WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Film deleted with ID: ${id}`)
  })
}

const createCritic = (request, response) => {
  const { idCritic, topCritic, name, newImage, org } = request.body
  pool.query('INSERT INTO critics (idCritic, topCritic, name, newImage, org) ' +
    'VALUES ($1, $2, $3, $4, $5)', [idCritic, topCritic, name, newImage, org],
    (error, results) => {
      if (error) {
        throw error
    }
    response.status(201).send(`Critic added with ID: ${result.insertId}`)
  })
}

const updateCritic = (request, response) => {
  const idCritic = parseInt(request.params.id)
  const { idCritic, topCritic, name, newImage, org } = request.body

  pool.query(
    'UPDATE critics SET idCritic = $1, topCritic = $2, name = $3, newImage = $4, org = $5',
    [idCritic, topCritic, name, newImage, org],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Critic modified with ID: ${id}`)
    }
  )
}

const deleteCritic = (request, response) => {
  const idCritic = parseInt(request.params.id)

  pool.query('DELETE FROM critics WHERE idCritic = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Film deleted with ID: ${id}`)
  })
}

const createReview = (request, response) => {
  const { newID, newTitle, newTitleURL, newPoster, newBackdrop } = request.body
  pool.query('INSERT INTO reviews (reviewID, newDate, fresh, reviewText, idFilm, idCrit, rating) ' +
    'VALUES ($1, $2, $3, $4, $5, $6, $7)', [reviewID, newDate, fresh, reviewText, idFilm, idCrit, rating],
    (error, results) => {
      if (error) {
        throw error
    }
    response.status(201).send(`Review added with ID: ${result.insertId}`)
  })
}

const updateReview = (request, response) => {
  const reviewID = parseInt(request.params.id)
  const { reviewID, newDate, fresh, reviewText, idFilm, idCrit, rating } = request.body

  pool.query(
    'UPDATE reviews SET reviewID = $1, newDate = $2, fresh = $3, reviewText = $4, idFilm = $5, idCrit = $6, rating = $7',
    [reviewID, newDate, fresh, reviewText, idFilm, idCrit, rating],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Review modified with ID: ${id}`)
    }
  )
}

const deleteReview = (request, response) => {
  const reviewID = parseInt(request.params.id)

  pool.query('DELETE FROM reviews WHERE reviewID = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Review deleted with ID: ${id}`)
  })
}

module.exports = {
  getMovieInfobyID,
  getMovieInfobyName,
  getCriticbyID,
  getCriticbyName,
  getReviewsbyID,
  getReviewsbyName,
  getTopReviewsbyID,
  createFilm,
  updateFilm,
  deleteFilm,
  createCritic,
  updateCritic,
  deleteCritic,
  createReview,
  updateReview,
  deleteReview,
}