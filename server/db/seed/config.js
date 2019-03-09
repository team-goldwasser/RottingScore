var dbHost = require('./database_env').dbHost;
var dbPassword = require('./database_env').dbPassword;

var knex = require('knex')({
  client: 'mysql',
  version: '5.7',
  connection: {
    host: dbHost,
    port: 3306,
    user: 'root',
    password: dbPassword,
    database: 'scorecard',
    multipleStatements: true
  }
});

knex.schema.hasTable('movies').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('movies', function (table) {
      table.integer('id');
      table.primary('id');
      table.string('title');
      table.string('title_url');
      table.string('tmdb_poster_path');
      table.string('tmdb_backdrop_path');
    });
  }
});

knex.schema.hasTable('critics').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('critics', function (table) {
      table.increments('id');
      table.boolean('top_critic');
      table.string('name');
      table.string('img_url');
      table.string('organization');
    });
  }
});

knex.schema.hasTable('critic_reviews').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('critic_reviews', function (table) {
      table.increments('id');
      table.date('review_date');
      table.boolean('fresh');
      table.string('review_text').collate('utf8_unicode_ci');
      table.integer('movie_id');
      table.integer('critic_id');
      table.float('score');
      table.foreign('movie_id').references('id').on('movies');
      table.foreign('critic_id').references('id').on('critics');
    });
  }
});






module.exports.knex = knex;
