const faker = require('faker');
const fs = require('fs');
var csv = require("fast-csv");

function generateMovie(filmTotal, critTotal, revTotal, filmSets, total){
  if (critTotal === undefined) {
    critTotal = filmTotal / 2;
  }
  if (revTotal === undefined) {
    revTotal = filmTotal * 50;
  }
  if (filmSets === undefined) {
    filmSets = 0;
  }
  if (total === undefined) {
    total = filmTotal;
  }
  generateFlic(filmTotal, critTotal, revTotal, filmSets, total);
}

function generateCritic(critTotal, revTotal, critSets, total){
  if (revTotal === undefined) {
    revTotal = critTotal * 100;
  }
  if (critSets === undefined) {
    critSets = 0;
  }
  if (total === undefined) {
    total = critTotal * 2;
  }
  generateFlac(critTotal, revTotal, critSets, total);
}

function generateReview(reviewTotal, revSets, total){
  if (total === undefined) {
    total = reviewTotal / 50;
  }
  if (revSets === undefined) {
    revSets = 0;
  }
  generateClack(reviewTotal, revSets, total);
}

// Consider changing region settings for some small subset of
// films to generate foreign films - perhaps once every 100 films

function generateFlic(count, critCount, revCount, sets, total) {
  var movieData = [];
  var countDown = count > 500 ? count - 500 : 0;
  var loopLimit = count > 500 ? 500 : count;
  for (tally = 1; tally <= loopLimit; tally++) {
    var filmTitle = faker.lorem.words();
    var filmURL = filmTitle.replace(/ /g, '_');
    var filmSplit = filmTitle.split(' ');
    var filmString = '';
    filmSplit.forEach(function(element) {
      if (filmSplit.indexOf(element) === 0) {
        filmString += element[0].toUpperCase() + element.slice(1) + ' ';
      } else if (filmSplit.indexOf(element) === filmSplit.length - 1) {
        filmString += element[0].toUpperCase() + element.slice(1);
      } else {
        filmString += element[0].toUpperCase() + element.slice(1) + ' ';
      }
    });
    var newFilm = {
      newID: tally + (sets * 500),
      newTitle: filmString,
      newTitleURL: filmURL,
      newPoster: faker.image.image(),
      newBackdrop: faker.image.image()
    };
    movieData.push(newFilm);
    newFilm = null;
  }
  if (sets === 0) {
    var movieStream = csv.createWriteStream({headers: true}),
    writeableStream = fs.createWriteStream(__dirname + '/movies.csv');
  } else {
    var movieStream = csv.createWriteStream({headers: true}),
    writeableStream = fs.createWriteStream(__dirname + '/movies.csv', {'flags': 'a'});
  };
  movieStream.pipe(writeableStream);
  movieData.forEach((element) => movieStream.write(element));
  movieStream.end();
  writeableStream.on(
    'finish',
    () => {
      if (countDown > 0) {
        movieData = null;
        sets++;
        generateMovie(countDown, critCount, revCount, sets, total);
      } else {
        console.log('Movie data saved!');
        generateCritic(critCount, revCount, 0, total);
      }
    }
  )
}

function generateCritic(criticTotal, reTotal, criticSets, total) {
  var criticData = [];
  var dwindle = criticTotal > 500 ? criticTotal - 500 : 0;
  var loopCap = criticTotal > 500 ? 500 : criticTotal;
  for (marker = 1; marker <= loopCap; marker++) {
    var newCritic = {
      idCritic: marker + (criticSets * 500),
      topCritic: Math.floor(Math.random() * 2),
      name: faker.name.findName(),
      newImage: faker.image.avatar(),
      org: faker.company.companyName()
      };
    criticData.push(newCritic);
    newCritic = null;
  }
  if (criticSets === 0) {
    var critStream = csv.createWriteStream({headers: true}),
    writeableStream = fs.createWriteStream(__dirname + '/critics.csv');
  } else {
    var critStream = csv.createWriteStream({headers: true}),
    writeableStream = fs.createWriteStream(__dirname + '/critics.csv', {'flags': 'a'});
  };
  critStream.pipe(writeableStream);
  criticData.forEach((element) => critStream.write(element));
  critStream.end();
  writeableStream.on(
    'finish',
    () => {
      if (dwindle > 0) {
        criticData = null;
        criticSets++;
        generateCritic(dwindle, reTotal, criticSets, total);
      } else {
        console.log('Critics data saved!');
        generateReview(reTotal, 0, total);
      }
    }
  )
}

function generateClack(reviewCount, reviewSets, total) {
  var reviewData = [];
  var windDown = reviewCount > 500 ? reviewCount - 500 : 0;
  var loopMax = reviewCount > 500 ? 500 : reviewCount;
  for (count = 1; count <= loopMax; count++) {
    reviewString = () => {
      var generatorChoice = Math.floor(Math.random() * 3) + 1;
      switch(generatorChoice){
        case 1:
          return faker.lorem.sentences();
        case 2:
          return faker.lorem.paragraph();
        case 3:
          return faker.lorem.paragraphs();
      };
    };
    var reviewActual = reviewString();
    var newReview = {
      reviewID: count + (reviewSets * 500),
      newDate: Math.floor(Math.random() * 2),
      fresh: Math.floor(Math.random() * 2),
      reviewText: reviewActual.replace(/\n \r/g, '\\n\\r'),
      idFilm: Math.floor((1 - Math.random()) * total),
      idCrit: Math.floor((1 - Math.random()) * (total / 2)),
      rating: Math.floor(Math.random() * 10) + (Math.floor(Math.random() * 10) / 100)
    };
    reviewData.push(newReview);
    newReview = null;
  }
  if (reviewSets === 0) {
    var revStream = csv.createWriteStream({headers: true}),
    writeableStream = fs.createWriteStream(__dirname + '/reviews.csv');
  } else {
    var revStream = csv.createWriteStream({headers: true}),
    writeableStream = fs.createWriteStream(__dirname + '/reviews.csv', {'flags': 'a'});
  };
  revStream.pipe(writeableStream);
  reviewData.forEach((element) => revStream.write(element));
  revStream.end();
  writeableStream.on(
    'finish',
    () => {
      if (windDown > 0) {
        reviewData = null;
        reviewSets++;
        if (reviewSets % 100000 === 0) {
          console.log(reviewSets + ' records generated!');
        };
        writeableStream.end();
        generateReview(windDown, reviewSets, total);
      } else {
        writeableStream.end();
        console.log('Reviews data saved!');
      }
    }
  )
}

module.exports = generateMovie