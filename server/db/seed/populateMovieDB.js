var knex = require('./config.js').knex;

var http = require('https');
var page = 1;
//Populate DB with most popular movies
while (page <= 5 ) {

  var options_pop = {
    'method': 'GET',
    'hostname': 'api.themoviedb.org',
    'port': null,
    'path': `/3/movie/popular?page=${(page)}&language=en-US&api_key=44a8710986b6c1a6c6016e7385df058d&region=US`,
    'headers': {}
  };
  var options_np = {
    'method': 'GET',
    'hostname': 'api.themoviedb.org',
    'port': null,
    'path': `/3/movie/now_playing?page=${(page)}&language=en-US&api_key=44a8710986b6c1a6c6016e7385df058d&region=US`,
    'headers': {}
  };
  page++;

  let req_np = http.request(options_np, function (res) {
    var chunks = [];

    res.on('data', function (chunk) {
      chunks.push(chunk);
    });

    res.on('end', function () {
      var body = Buffer.concat(chunks);
      returnJson = JSON.parse(body);
      let movies = returnJson.results;
      for (var movie = 0; movie < movies.length; movie++) {
        //insert movie into database if it does not exist, is english,
        // was made in the last 10 years and we have not inserted more than 100
        if (movies[movie].release_date.includes('201') &&
        (movies[movie].original_language = 'en') &&
        movies[movie].vote_average > 6 &&
        movies[movie].poster_path !== null && movies[movie].backdrop_path !== null) {
          knex('movies').insert({id: movies[movie].id, title: movies[movie].title, title_url: titleToURL(movies[movie].title), tmdb_poster_path: movies[movie].poster_path, tmdb_backdrop_path: movies[movie].poster_path})
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    });
  });

  req_np.write('{}');
  req_np.end();

  let req_pop = http.request(options_pop, function (res) {
    var chunks = [];

    res.on('data', function (chunk) {
      chunks.push(chunk);
    });

    res.on('end', function () {
      var body = Buffer.concat(chunks);
      returnJson = JSON.parse(body);
      let movies = returnJson.results;
      for (var movie = 0; movie < movies.length; movie++) {
        //insert movie into database if it does not exist, is english,
        // was made in the last 10 years and we have not inserted more than 100
        if (movies[movie].release_date.includes('201') &&
        (movies[movie].original_language = 'en') &&
        movies[movie].vote_average > 6 &&
        movies[movie].poster_path !== null && movies[movie].backdrop_path !== null) {
          knex('movies').insert({id: movies[movie].id, title: movies[movie].title, title_url: titleToURL(movies[movie].title), tmdb_poster_path: movies[movie].poster_path, tmdb_backdrop_path: movies[movie].poster_path})
            .catch(function (error) {
              if (error) {
                console.log(error);
              }
            });
        }
      }
    });
  });
  req_pop.write('{}');
  req_pop.end();

}

//change URL
function titleToURL(title) {
  var url = title.toLowerCase();
  console.log(url);
  url = url.replace(/\s+/g, '_');
  url = url.replace(/&/g, 'and');
  url = url.replace(/[.,\/#!$%\^\*;:{}=\-`~()]/g, '');
  console.log(url);
  return url;
}

