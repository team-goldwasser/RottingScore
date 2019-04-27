const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoose = require('mongoose');
const fs = require('fs');
const JSONStream = require( 'JSONStream' );

const server = 'mongodb://localhost:27017';
const database = 'movieReviews';

const client = new MongoClient(server);

client.connect((err) => {
  // assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(database);
  const filmCollect = db.collection('movies');
  const critCollect = db.collection('critics');
  const revCollect = db.collection('reviews');
  // insertDocuments(db, function() {
  // client.close();
})

const insertData = function(db, destination, source, callback) {
  // Get the documents collection
  const collection = db.collection(destination);
  // Insert some documents
  collection.insertMany(source).then(function(err, result) {
    // assert.equal(err, null);
    console.log("Inserted " + result.insertedCount + " items into the collection");
    db.close();
  });
}

const findMovies = function(db, container, callback) {
  // Get the documents collection
  const collection = db.collection(container);
  // Find some documents
  collection.find(_______).toArray(function(err, films) {
    assert.equal(err, null);
    console.log("Found the following movies");
    console.log(films);
    callback(films);
  });
}
