var knex = require('knex')({
  client: 'mysql',
  version: '5.7',
  connection: {
    host: 'ec2-13-57-43-118.us-west-1.compute.amazonaws.com',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'scorecard'
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

function getMovieInfo(id) {
  var whereClause;
  if (id && !(isNaN(Number(id)))) {
    whereClause = {id: Number(id)};
  } else if (id && (isNaN(Number(id)))) {
    whereClause = {title_url: id};
  } else {
    whereClause = {id: id};
  }

  return knex('movies').select().where(whereClause);
}

function getTomatoMeter(id) {
  var whereClause;
  whereClause = {movie_id: id};

  return knex('critic_reviews').select('movie_id')
    .avg('score as score_avg')
    .avg('fresh as tomatometer')
    .count('fresh as review_count')
    .groupBy('movie_id')
    .where(whereClause)
    .then(results => {
      let returnArray = results;
      return knex('critic_reviews').select('review_text')
      .limit(1)
      .where(whereClause)
      .then(results => {
        returnArray[0].review_text = results[0].review_text;
        return returnArray;
      })
    });
}

function getTopCriticMeter(id) {
  var whereClause;
  whereClause = {movie_id: id, 'critics.top_critic': 1};

  return knex('critic_reviews')
    .join('critics', 'critic_reviews.critic_id', '=', 'critics.id')
    .select('movie_id')
    .avg('score as score_avg')
    .avg('fresh as tomatometer')
    .count('fresh as review_count')
    .groupBy('movie_id')
    .where(whereClause)
    .then(results => {
      let returnArray = results;
      return knex('critic_reviews').select('review_text')
      .limit(1)
      .where({movie_id: id})
      .then(results => {
        returnArray[0].review_text = results[0].review_text;
        return returnArray;
      })
    });
}

module.exports = {
  knex: knex,
  getMovieInfo: getMovieInfo,
  getTomatoMeter: getTomatoMeter,
  getTopCriticMeter: getTopCriticMeter
};
