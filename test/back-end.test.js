const db = require('../server/db/db.js')
const request = require('supertest');
const app = require('.././server/app.js');

//Test the express server serves static files
describe('Test the Express Server', () => {
  test('It should respond to index.html with 200 status code', (done) => {
      return request(app).get('/index.html')
      .expect(200)
      .expect('Content-Type', /html/)
      .then(response => {
        done();
      });
    });
});

//Testing for Tomatometer/Scorecard Endpoint

describe('Test the Tomatometer Endpoint', () => {
  test('It should respond to a valid get request by ID with valid data', (done) => {
        return request(app).get('/cr/tomatometer/284054')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(response => {
          expect(response.body.id).toEqual(284054);
          expect(response.body.title_url).toEqual('black_panther');
          expect(response.body.tomatometer).toBeLessThanOrEqual(100);
          expect(response.body.avgrating).toBeLessThanOrEqual(10);
          expect(response.body.numOfReviews).toBeGreaterThanOrEqual(0);
          expect(response.body.fresh).toBeGreaterThanOrEqual(0);
          expect(response.body.rotten).toBeGreaterThanOrEqual(0);
          expect(response.body.randomReview).toBeDefined;
          done();
      });
    });


  test('It should respond to a valid get request by title_url with valid data', (done) => {
    return request(app).get('/cr/tomatometer/stan_and_ollie')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(response => {
      expect(response.body.id).toEqual(394741);
      expect(response.body.title_url).toEqual('stan_and_ollie');
      expect(response.body.tomatometer).toBeLessThanOrEqual(100);
      expect(response.body.avgrating).toBeLessThanOrEqual(10);
      expect(response.body.numOfReviews).toBeGreaterThanOrEqual(0);
      expect(response.body.fresh).toBeGreaterThanOrEqual(0);
      expect(response.body.rotten).toBeGreaterThanOrEqual(0);
      expect(response.body.randomReview).toBeDefined;
      done();
    });
  });

  test('It should respond to an invalid id with a valid object with invalid data', (done) => {
      return request(app).get('/cr/tomatometer/0')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(response => {
        expect(response.body.id).toEqual(0);
        expect(response.body.title_url).toEqual('error_not_a_title_in_db');
        expect(response.body.tomatometer).toBeLessThanOrEqual(0);
        expect(response.body.avgrating).toBeLessThanOrEqual(0);
        expect(response.body.numOfReviews).toBeGreaterThanOrEqual(0);
        expect(response.body.fresh).toBeGreaterThanOrEqual(0);
        expect(response.body.rotten).toBeGreaterThanOrEqual(0);
        expect(response.body.randomReview).toBeDefined;
        done();
      });
  });

  test('It should respond to no id with a valid object with invalid data', (done) => {
    return request(app).get('/cr/tomatometer/')
    .expect(200)
    .expect('Content-Type', /json/)
    .then(response => {
      expect(response.body.id).toEqual(0);
      expect(response.body.title_url).toEqual('error_not_a_title_in_db');
      expect(response.body.tomatometer).toBeLessThanOrEqual(0);
      expect(response.body.avgrating).toBeLessThanOrEqual(0);
      expect(response.body.numOfReviews).toBeGreaterThanOrEqual(0);
      expect(response.body.fresh).toBeGreaterThanOrEqual(0);
      expect(response.body.rotten).toBeGreaterThanOrEqual(0);
      expect(response.body.randomReview).toBeDefined;
      done();
    });
});

});

//Testing for MovieInfo Endpoint

describe('Test the MovieInfo endpoint', () => {
  test('It should access the endpoint and retrieve movieInfo based on an ID', (done)=> {
    return request(app).get('/m/movieinfo/284054')
    .then(function (response) {
      expect(response.body.id).toEqual(284054);
      expect(response.body.title_url).toEqual('black_panther');
      expect(response.body.title).toEqual('Black Panther');
      done();
    })
  });

  test('It should access the endpoint and retrieve movieInfo based on a title_url', (done)=> {
    return request(app).get('/m/movieinfo/stan_and_ollie')
    .then(function (response) {
      expect(response.body.id).toEqual(394741);
      expect(response.body.title_url).toEqual('stan_and_ollie');
      expect(response.body.title).toEqual('Stan & Ollie');
      done();
    })
  });

  test('It should access the endpoint and retrieve a valid object with invalid data based on an invalid id', (done)=> {
    return request(app).get('/m/movieinfo/0')
    .then(function (response) {
      expect(response.body.id).toEqual(0);
      expect(response.body.title).toEqual('not a movie in db');
      expect(response.body.title_url).toEqual('not_a_movie_in_db');
      done();
    })
  });

  test('It should access the endpoint and retrieve a valid object with invalid data based on no id', (done)=> {
    return request(app).get('/m/movieinfo/')
    .then(function (response) {
      expect(response.body.id).toEqual(0);
      expect(response.body.title).toEqual('not a movie in db');
      expect(response.body.title_url).toEqual('not_a_movie_in_db');
      done();
    })
  });
})


// Testing for getMovieInfo and Tomatometer Database calls

describe('Test the getMovieInfo and getTomatometer Database Functions', () => {

  test('The database and tables should exist', (done)=> {
    expect(db.knex).toBeDefined;
    return db.knex.schema.hasTable('movies')
    .then(function(exists) {
      expect(exists).toBeTruthy;
      return db.knex.schema.hasTable('critics');
    })
    .then(function(exists) {
      expect(exists).toBeTruthy;
      return db.knex.schema.hasTable('critic_reviews')
    })
    .then(function(exists) {
      expect(exists).toBeTruthy;
      done();
    });
  });

  test('It should access the database and retrieve movieInfo based on an ID', (done)=> {
    return db.getMovieInfo('284054')
    .then(function (results) {
      expect(results[0].id).toEqual(284054);
      expect(results[0].title_url).toEqual('black_panther');
      expect(results[0].title).toEqual('Black Panther');
      done();
    })
  });

  test('It should access the database and retrieve the tomatometer based off an ID', (done) => {
      return db.getTomatoMeter(284054)
      .then(function (results) {
        expect(results[0].movie_id).toEqual(284054);
        expect(results[0].tomatometer).toBeLessThanOrEqual(100);
        expect(results[0].review_count).toBeGreaterThanOrEqual(0);
        expect(results[0].randomReview).toBeDefined;
        done();
      });
  });

  test('It should access the database and retrieve movieInfo based off a Title URL and retreive Tomatometer from there', (done)=> {
    return db.getMovieInfo('stan_and_ollie')
    .then(function (results) {
      expect(results[0].id).toEqual(394741);
      expect(results[0].title_url).toEqual('stan_and_ollie');
      expect(results[0].title).toEqual('Stan & Ollie');
      return db.getTomatoMeter(results[0].id)
    })
    .then(function (results) {
      expect(results[0].movie_id).toEqual(394741);
      expect(results[0].tomatometer).toBeLessThanOrEqual(1);
      expect(results[0].review_count).toBeGreaterThanOrEqual(0);
      expect(results[0].randomReview).toBeDefined;
      done();
    })
  });

  afterAll((done) => {
    db.knex.destroy(done);
  });
})


