var dbHost = require('./database_env').dbHost;
var dbPassword = require('./database_env').dbPassword;

const fs = require('fs');
const path = require('path');
const { Pool, Client } = require('pg');
var copyFrom = require('pg-copy-streams').from;

var movieInput = path.join(__dirname, './seed/data_generation/movies.csv');
var criticInput = path.join(__dirname, './seed/data_generation/critics.csv');
var reviewInput = path.join(__dirname, './seed/data_generation/reviews.csv');

var filmTable = 'movies';
var criticTable = 'critics';
var reviewTable = 'critic_reviews';

const pool = new Pool({
  user: 'postgres',
  host: 'ec2-3-14-96-84.us-east-2.compute.amazonaws.com',
  database: 'scorecard',
  password: '1qazXSW!',
  port: 5432,
})

// const client = new Client({
//   user: 'postgres',
//   host: 'ec2-3-14-96-84.us-east-2.compute.amazonaws.com',
//   database: 'scorecard',
//   password: '1qazXSW!',
//   port: 5432,
// })

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

pool.connect((err, client, done) => {
  if (err) throw err;
  client.query(`Truncate ${filmTable} RESTART IDENTITY CASCADE`, (err) => {
    if (err) {
      done();
      return console.log(`Error in truncate table ${err}`);
    } else {
      console.log(`Truncated ${filmTable}`);
      client.query(`ALTER TABLE ${filmTable} DROP COLUMN IF EXISTS id CASCADE`, (err) => {
        if (err) {
          done();
          return console.log(`Error in dropping id column, ${err}`);
        } else {
          console.log(`Deleted id column in ${filmTable}`);
          var dropConstraints = `DROP INDEX IF EXISTS title_idx`;
          client.query(dropConstraints, (err) => {
            if (err) {
              done();
              return console.log(`Error in dropping title column index, ${err}`);
            } else{
              console.log(`Deleted index on title column in ${filmTable}`);
              var stream = client.query(copyFrom(`COPY ${filmTable} (title, title_url,
                tmdb_poster_path, tmdb_backdrop_path) FROM STDIN CSV HEADER`));
              var fileStream = fs.createReadStream(movieInput);

              fileStream.on('error', (error) =>{
                console.log(`Error in reading file: ${error}`)
              });
              stream.on('error', (error) => {
                console.log(`Error in copy command: ${error}`)
              });
              stream.on('end', () => {
                console.log(`Completed loading data into ${filmTable}`);
                var filmIns = `ALTER TABLE ${filmTable} ADD COLUMN id BIGINT ` +
                  `GENERATED ALWAYS AS IDENTITY PRIMARY KEY;`;
                client.query(filmIns, (err, res) => {
                  if (err) {
                    console.log(err)
                  } else {
                    console.log(`Primary key indices added to ${filmTable}!`);
                    var filmInd = `CREATE INDEX title_idx ON ${filmTable}(title);`;
                    client.query(filmInd, (err, res) => {
                      if (err) {
                        console.log(err)
                      } else {
                        console.log(`Title index added to ${filmTable}!`)
                        client.query(`Truncate ${criticTable} RESTART IDENTITY CASCADE`, (err) => {
                          if (err) {
                            done();
                            return console.log(`Error in truncate table ${err}`)
                          } else {
                            console.log(`Truncated ${criticTable}`)
                            client.query(`ALTER TABLE ${criticTable} DROP COLUMN IF EXISTS id CASCADE`, (err) => {
                              if (err) {
                                done();
                                return console.log(`Error in dropping id column, ${err}`);
                              } else {
                                console.log(`Deleted id column in ${criticTable}`);
                                var stream = client.query(copyFrom(`COPY ${criticTable} (top_critic, name,
                                  img_url, organization) FROM STDIN CSV HEADER`));
                                var fileStream = fs.createReadStream(criticInput);

                                fileStream.on('error', (error) =>{
                                  console.log(`Error in reading file: ${error}`)
                                })
                                stream.on('error', (error) => {
                                  console.log(`Error in copy command: ${error}`)
                                })
                                stream.on('end', () => {
                                  console.log(`Completed loading data into ${criticTable}`);
                                  var critInd = `ALTER TABLE ${criticTable} ADD COLUMN id BIGINT ` +
                                    `GENERATED ALWAYS AS IDENTITY PRIMARY KEY;`;
                                  client.query(critInd, (err, res) => {
                                    if (err) {
                                      console.log(err)
                                    } else {
                                      console.log(`Primary key indices added to ${criticTable}!`);
                                      client.query(`Truncate ${reviewTable} RESTART IDENTITY CASCADE`, (err) => {
                                        if (err) {
                                          done();
                                          return console.log(`Error in truncate table ${err}`)
                                        } else {
                                          console.log(`Truncated ${reviewTable}`);
                                          var dropIndex = `DROP INDEX IF EXISTS film_id_idx`;
                                          client.query(dropIndex, (err) => {
                                            if (err) {
                                              done();
                                              return console.log(`Error in dropping index, ${err}`);
                                            } else {
                                              console.log(`Deleted index in ${reviewTable}`);
                                              var dropConstraints = `ALTER TABLE ${reviewTable} ` +
                                                `DROP CONSTRAINT IF EXISTS critic_reviews_film_fk, ` +
                                                `DROP CONSTRAINT IF EXISTS critic_reviews_crit_fk`;
                                              client.query(dropConstraints, (err) => {
                                                if (err) {
                                                  done();
                                                  return console.log(`Error in dropping foreign keys, ${err}`);
                                                } else {
                                                  console.log(`Deleted foreign keys in ${reviewTable}`);
                                                  var dropCols = `ALTER TABLE ${reviewTable} DROP COLUMN IF EXISTS id CASCADE`;
                                                  client.query(dropCols, (err) => {
                                                    if (err) {
                                                      done();
                                                      return console.log(`Error in dropping id column, ${err}`);
                                                    } else {
                                                      console.log(`Deleted id column in ${reviewTable}`);
                                                      var stream = client.query(copyFrom(`COPY ${reviewTable} (review_date,
                                                        fresh, review_text, review_url, movie_id, critic_id, score) FROM
                                                        STDIN CSV HEADER`));
                                                      var fileStream = fs.createReadStream(reviewInput,
                                                        {
                                                          highWaterMark: ( 1 * 1024 )
                                                        }
                                                      );
                                                      fileStream.on('error', (error) =>{
                                                        console.log(`Error in reading file: ${error}`)
                                                      })
                                                      stream.on('error', (error) => {
                                                        console.log(`Error in copy command: ${error}`, error)
                                                      })
                                                      stream.on('end', () => {
                                                        console.log(`Completed loading data into ${reviewTable}`);
                                                        var revInd = `ALTER TABLE ${reviewTable} ADD COLUMN id BIGINT ` +
                                                        `GENERATED ALWAYS AS IDENTITY PRIMARY KEY;`;
                                                        var revFilmKey = `ALTER TABLE ${reviewTable} ADD CONSTRAINT film_fk ` +
                                                        `FOREIGN KEY (movie_id) REFERENCES movies(id) ON DELETE CASCADE;`;
                                                        var revCritKey = `ALTER TABLE ${reviewTable} ADD CONSTRAINT crit_fk ` +
                                                        `FOREIGN KEY (critic_id) REFERENCES critics(id) ON DELETE CASCADE;`;
                                                        var revFilmInd = `CREATE INDEX film_id_idx ON ${reviewTable}(movie_id);`;
                                                        client.query(revInd, (err, res) => {
                                                          if (err) {
                                                            console.log(err)
                                                          } else {
                                                            console.log(`Primary key indices added to ${reviewTable}!`);
                                                            client.query(revFilmKey, (err, res) => {
                                                              if (err) {
                                                                console.log(err)
                                                              } else {
                                                                console.log('Film foreign key added!');
                                                                client.query(revCritKey, (err, res) => {
                                                                  if (err) {
                                                                    console.log(err)
                                                                  } else {
                                                                    console.log('Critic foreign key added!');
                                                                    client.query(revFilmInd, (err, res) => {
                                                                      if (err) {
                                                                        console.log(err)
                                                                      } else {
                                                                        console.log('Film foreign key index added!');
                                                                        // client.query(revCritInd, (err, res) => {
                                                                        //   if (err) {
                                                                        //     console.log(err)
                                                                        //   } else {
                                                                        //     console.log('Critic foreign key index added!');
                                                                            done();
                                                                        //   }
                                                                        // });
                                                                      }
                                                                    });
                                                                  }
                                                                });
                                                              }
                                                            });
                                                          }
                                                        });
                                                      })
                                                      fileStream.pipe(stream);
                                                    }
                                                  })
                                                }
                                              })
                                            }
                                          })
                                        }
                                      })
                                    }
                                  });
                                })
                                fileStream.pipe(stream);
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                });
              });
              fileStream.pipe(stream);
            }
          })
        }
      })
    }
  });
})

// pool.query(text)
//   .then(res => console.log('Movie Data: ' + res.rows[0]))
//   .catch(e => setImmediate(() => { throw e }))
//   .then(pool.end());

// client.query(text)
// .then(res => console.log('Movie Data: ' + res.rows[0]))
// .catch(e => setImmediate(() => { throw e }))
// .then(client.end())