const fs = require('fs');
const path = require('path');
const { Pool, Client } = require('pg');
var copyFrom = require('pg-copy-streams').from;

// const text = 'SELECT * FROM movies WHERE _id = 10';

const pgPW = require('./dbAccess');
var movieInput = path.join(__dirname, './seed/data_generation/movies.csv');
var criticInput = path.join(__dirname, './seed/data_generation/critics.csv');
var reviewInput = path.join(__dirname, './seed/data_generation/reviews.csv');

var filmTable = 'movies';
var criticTable = 'critics';
var reviewTable = 'critic_reviews';

const pool = new Pool({
  user: 'mysdc',
  host: 'localhost',
  database: 'scorecard',
  password: pgPW,
  port: 5432,
})

const client = new Client({
  user: 'mysdc',
  host: 'localhost',
  database: 'scorecard',
  password: pgPW,
  port: 5432,
})
client.connect()

client.query(`Truncate ${filmTable} CASCADE`, (err) => {
  if (err) {
    client.end()
    return console.log(`Error in truncate table ${err}`)
  } else {
    console.log(`Truncated ${filmTable}`);
    var stream = client.query(copyFrom(`COPY ${filmTable} FROM STDIN CSV HEADER`));
    var fileStream = fs.createReadStream(movieInput);

    fileStream.on('error', (error) =>{
      console.log(`Error in reading file: ${error}`)
    })
    stream.on('error', (error) => {
      console.log(`Error in copy command: ${error}`)
    })
    stream.on('end', () => {
      console.log(`Completed loading data into ${filmTable}`)
      client.query(`Truncate ${criticTable} CASCADE`, (err) => {
        if (err) {
          client.end()
          return console.log(`Error in truncate table ${err}`)
        } else {
          console.log(`Truncated ${criticTable}`)
          var stream = client.query(copyFrom(`COPY ${criticTable} FROM STDIN CSV HEADER`));
          var fileStream = fs.createReadStream(criticInput);

          fileStream.on('error', (error) =>{
            console.log(`Error in reading file: ${error}`)
          })
          stream.on('error', (error) => {
            console.log(`Error in copy command: ${error}`)
          })
          stream.on('end', () => {
            console.log(`Completed loading data into ${criticTable}`)
            client.query(`Truncate ${reviewTable} CASCADE`, (err) => {
              if (err) {
                client.end()
                return console.log(`Error in truncate table ${err}`)
              } else {
                console.log(`Truncated ${reviewTable}`);
                var stream = client.query(copyFrom(`COPY ${reviewTable} FROM STDIN CSV HEADER`));
                var fileStream = fs.createReadStream(reviewInput);

                fileStream.on('error', (error) =>{
                  console.log(`Error in reading file: ${error}`)
                })
                stream.on('error', (error) => {
                  console.log(`Error in copy command: ${error}`, error)
                })
                stream.on('end', () => {
                  console.log(`Completed loading data into ${reviewTable}`)
                  client.end()
                })
                fileStream.pipe(stream);
              }
            })
          })
          fileStream.pipe(stream);
        }
      })
    })
    fileStream.pipe(stream);
  }
});

// pool.query(text)
//   .then(res => console.log('Movie Data: ' + res.rows[0]))
//   .catch(e => setImmediate(() => { throw e }))
//   .then(pool.end());

// client.query(text)
// .then(res => console.log('Movie Data: ' + res.rows[0]))
// .catch(e => setImmediate(() => { throw e }))
// .then(client.end())