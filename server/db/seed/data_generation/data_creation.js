const faker = require('faker');
const fs = require('fs');
var csv = require("fast-csv");

// This function is called first and generates film titles
function generateMovie(filmTotal, filmSets, total){
  //  filmSets keeps track of how many sets of 500 records have been generated
  if (filmSets === undefined) {
    filmSets = 0;
  };
  // Save the original parameter for the number of records
  if (total === undefined) {
    total = filmTotal;
  };
  // Creates a set of 500 film records
  generateFlic(filmTotal, filmSets, total);
}

// Generates critic records - called from last iteration of generateMovie
function generateCritic(critTotal, critSets, total){
  //  critSets keeps track of how many sets of 500 records have been generated
  if (critSets === undefined) {
    critSets = 0;
  };
  // Save the original parameter for the number of records
  if (total === undefined) {
    total = critTotal * 2;
  };
  // Creates a set of 500 critic records
  generateFlac(critTotal, critSets, total);
}

// Generates review records - called from last iteration of generateCritic
function generateReview(reviewTotal, revSets, total){
  //  revSets keeps track of how many sets of 500 records have been generated
  if (revSets === undefined) {
    revSets = 0;
  };
  // Creates a set of 500 review records
  generateClack(reviewTotal, revSets, total);
}

// Generates 500 film records (or less if fewer needed to reach requested total)
function generateFlic(count, sets, total) {
  // container for new records
  var movieData = [];
  // decrements number of records to generate by the current batch of 500 unless
  // less than 500 records are needed in which case total records needed is set to 0
  var countDown = count > 500 ? count - 500 : 0;
  // sets the upper bound for the loop condition to 500 or remaining records needed
  // whichever is less
  var loopLimit = count > 500 ? 500 : count;
  // Loop to build film records
  for (tally = 1; tally <= loopLimit; tally++) {
    // Generates film title
    var filmTitle = faker.random.words();
    // Creates dummy url for film by replacing spaces with underscores
    var filmURL = filmTitle.replace(/ /g, '_');
    // Initial caps film title by splitting title into an array
    var filmSplit = filmTitle.split(' ');
    // Initializes an accumulator
    var filmString = '';
    // Iterates through array pushing each word to a new string
    filmSplit.forEach(function(element) {
      // capitalize first word if title is more than one word
      if (filmSplit.indexOf(element) === 0 && filmSplit.length > 1) {
        filmString += element[0].toUpperCase() + element.slice(1) + ' ';
      // capitalize first word if only word in title
      } else if (filmSplit.indexOf(element) === 0 && filmSplit.length === 1) {
        filmString += element[0].toUpperCase() + element.slice(1);
        // capitalize last word
      } else if (filmSplit.indexOf(element) === filmSplit.length - 1) {
        filmString += element[0].toUpperCase() + element.slice(1);
        // capitalize any remaining words whose length is greater than two
      } else if (element.length > 2) {
        filmString += element[0].toUpperCase() + element.slice(1) + ' ';
      }
    });
    // creates new film object
    var newFilm = {
      title: filmString,
      titleURL: filmURL,
      poster: faker.image.image(),
      backdrop: faker.image.image()
    };
    movieData.push(newFilm);
    newFilm = null;
  }
  // sets writestream to include csv headers if this is the first batch saved to file
  // otherwise sets writestream to skip headers and append data to existing file
  if (sets === 0) {
    var movieStream = csv.createWriteStream({headers: true, includeEndRowDelimiter: true}),
    writeableStream = fs.createWriteStream(__dirname + '/movies.csv');
  } else {
    var movieStream = csv.createWriteStream({headers: false, flags: 'a', includeEndRowDelimiter: true}),
    writeableStream = fs.createWriteStream(__dirname + '/movies.csv', {'flags': 'a'});
  };
  movieStream.pipe(writeableStream);
  movieData.forEach((element) => movieStream.write(element));
  movieStream.end();
  writeableStream.on(
    'finish',
    () => {
      // if more films need to be generated calls generateMovie function with
      // number of films remaining, number of batches generated, and overall total
      // otherwise calls generateCritic function with overall total
      if (countDown > 0) {
        movieData = null;
        sets++;
        generateMovie(countDown, sets, total);
      } else {
        console.log('Movie data saved!');
        var criticsTotal = total / 2;
        generateCritic(criticsTotal, 0, total);
      }
    }
  )
}

// Generates 500 critic records (or less if fewer needed to reach needed total)
function generateFlac(criticTotal, criticSets, total) {
  // container for new records
  var criticData = [];
  // decrements number of records to generate by the current batch of 500 unless
  // less than 500 records are needed in which case total records needed is set to 0
  var dwindle = criticTotal > 500 ? criticTotal - 500 : 0;
  // sets the upper bound for the loop condition to 500 or remaining records needed
  // whichever is less
  var loopCap = criticTotal > 500 ? 500 : criticTotal;
  // Loop to build critic records
  for (marker = 1; marker <= loopCap; marker++) {
    // creates new critic object
    var newCritic = {
      topCritic: Math.floor(Math.random() * 2),
      name: faker.name.findName(),
      newImage: faker.image.avatar(),
      org: faker.company.companyName()
      };
    criticData.push(newCritic);
    newCritic = null;
  }
  // sets writestream to include csv headers if this is the first batch saved to file
  // otherwise sets writestream to skip headers and append data to existing file
  if (criticSets === 0) {
    var critStream = csv.createWriteStream({headers: true, includeEndRowDelimiter: true}),
    writeableStream = fs.createWriteStream(__dirname + '/critics.csv');
  } else {
    var critStream = csv.createWriteStream({headers: false, flags: 'a', includeEndRowDelimiter: true}),
    writeableStream = fs.createWriteStream(__dirname + '/critics.csv', {'flags': 'a'});
  };
  critStream.pipe(writeableStream);
  criticData.forEach((element) => critStream.write(element));
  critStream.end();
  writeableStream.on(
    'finish',
    () => {
      // if more critics need to be generated calls generateCritic function with
      // number of critics remaining, number of batches generated, and overall total
      // otherwise calls generateReview function with overall total
      if (dwindle > 0) {
        criticData = null;
        criticSets++;
        generateCritic(dwindle, criticSets, total);
      } else {
        console.log('Critics data saved!');
        var reTotal = total * 10;
        generateReview(reTotal, 0, total);
      }
    }
  )
}

// Generates 500 review records (or less if fewer needed to reach needed total)
function generateClack(reviewCount, reviewSets, total) {
  // container for new records
  var reviewData = [];
  // decrements number of records to generate by the current batch of 500 unless
  // less than 500 records are needed in which case total records needed is set to 0
  var windDown = reviewCount > 500 ? reviewCount - 500 : 0;
  // sets the upper bound for the loop condition to 500 or remaining records needed
  // whichever is less
  var loopMax = reviewCount > 500 ? 500 : reviewCount;
  // Loop to build review records
  for (count = 1; count <= loopMax; count++) {
    var makeDate = faker.date.between('2016-03-01', '2019-03-31');
    var revDate = (makeDate.getMonth() + 1) + '/' + makeDate.getDate() + '/' + makeDate.getFullYear();
    // creates new review object
    var newReview = {
      newDate: revDate,
      fresh: Math.floor(Math.random() * 2),
      reviewText: faker.lorem.paragraph(),
      reviewURL: faker.internet.url(),
      idFilm: Math.floor((Math.random() * total) + 1),
      idCrit: Math.floor((Math.random() * (total / 2)) + 1),
      rating: Math.floor(Math.random() * 10) + (Math.floor(Math.random() * 10) / 100),
    };
    reviewData.push(newReview);
    newReview = null;
  }
  // sets writestream to include csv headers if this is the first batch saved to file
  // otherwise sets writestream to skip headers and append data to existing file
  if (reviewSets === 0) {
    var revStream = csv.createWriteStream({headers: true, includeEndRowDelimiter: true}),
    writeableStream = fs.createWriteStream(__dirname + '/reviews.csv');
  } else {
    var revStream = csv.createWriteStream({headers: false, flags: 'a', includeEndRowDelimiter: true}),
    writeableStream = fs.createWriteStream(__dirname + '/reviews.csv', {'flags': 'a'});
  };
  revStream.pipe(writeableStream);
  reviewData.forEach((element) => revStream.write(element));
  revStream.end();
  writeableStream.on(
    'finish',
    () => {
      // if more reviews need to be generated calls generateReview function with
      // number of reviews remaining and number of batches generated
      if (windDown > 0) {
        reviewData = null;
        reviewSets++;
        // display counter to show progress
        if (reviewSets % 1000000 === 0) {
          console.log(reviewSets + ' records generated!');
        };
        generateReview(windDown, reviewSets, total);
      } else {
        writeableStream.end();
        console.log('Reviews data saved!');
      }
    }
  )
}

module.exports = generateMovie