const express = require('express');
const express_static = require('express-static');
const app = express();
const db = require('./db/dbPostgresQuery');
const cors = require('cors');

app.use(cors());

app.get('/m/movieinfo/:id', getMovieInfobyID);
app.get('/m/movieinfo/:name', getMovieInfobyName);

app.get('/cr/criticinfo/:name', getCriticbyName);

app.get('/cr/tomotometer/:id', getReviewsbyID);
app.get('/cr/tomotometer/:name', getReviewsbyName);

app.get('/cr/topcriticmeter/:id', getTopReviewsbyID);
app.get('/cr/topcriticmeter/:name', getTopReviewsbyName);

app.get('/cr/topdozenreviews/:id', get12ReviewsbyID);
app.get('/cr/topdozenreviews/:name', get12ReviewsbyName);

app.post('/m/movieinfo', createFilm);
app.delete('/m/movieinfo/:id', deleteFilmbyID);
app.delete('/m/movieinfo/:name', deleteFilmbyName);
app.put('/m/movieinfo/:id', updateFilmbyID);
app.put('/m/movieinfo/:name', updateFilmbyName);

app.post('/cr/criticinfo', createCritic);
app.delete('/cr/criticinfo/:name', deleteCritic);
app.put('/cr/criticinfo/:name', updateCritic);

app.post('/rev/reviewinfo', createReview);
app.delete('/rev/reviewinfo/:id', deleteReview);
app.put('/rev/reviewinfo/:id', updateReview);

app.use('/assets', express_static('./Scoreboard/dist/Scoreboard/assets/'));


module.exports = app;