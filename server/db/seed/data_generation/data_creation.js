const faker = require('faker');
const fs = require('fs');
const Json2csvTransform = require('json2csv').Transform;

const movieFields = ['newID', 'newTitle', 'newTitleURL', 'newPoster', 'newBackdrop'];
const criticFields = ['idCritic', 'topCritic', 'name', 'newImage', 'org'];
const reviewFields = ['reviewID', 'newDate', 'fresh', 'reviewText', 'idFilm', 'idCrit', 'rating'];

const filmOpts = { movieFields };
const critOpts = { criticFields };
const reviewOpts = { reviewFields };

// const transformOpts = { highWaterMark: 16384, encoding: 'utf-8' };

// const input = fs.createReadStream(inputPath, { encoding: 'utf8' });
// const output = fs.createWriteStream(outputPath, { encoding: 'utf8' });
// const json2csv = new Json2csvTransform(opts, transformOpts);

// const processor = input.pipe(json2csv).pipe(output);

var movieData = [];
var movieID = [];
var criticData = [];
var criticID = [];
var reviewData = [];

function generateData(total){
  for (tally = 1; tally <= total; tally++) {
    // generate entry and push to container
    // consider need for async in each faker call
    var newFlick = generateMovie(tally);
    movieData.push(newFlick);
    movieID.push(newFlick.newID);
  }
  fs.writeFile('movieData.')
  var criticTotal = total * Math.floor(Math.random * 4);
  for (marker = 1; marker <= criticTotal; marker++) {
    var newCritic = generateCritic(marker);
    criticData.push(newCritic);
    criticID.push(newCritic.idCritic);
  }
  var reviewTotal = (criticTotal * Math.floor(Math.random * 1)) * total;
  for (tracker = 1; tracker <= reviewTotal; tracker++) {
    var filmIndex = Math.floor(Math.random * movieID.length);
    var filmID = movieID[filmIndex];
    var critIndex = Math.floor(Math.random * criticID.length);
    var critID = criticID[critIndex];
    var addReview = generateReviews(tracker, filmID, critID);
    reviewData.push(addReview);
  }
  // return container (or save?)
}

function seedDB(total){
    // drop old database
    // create new connection to database
    // import data
}

// API Combination Example:

// faker.fake({{name.lastName}}, {{name.firstName}})

// Consider changing region settings for some small subset of
// films to generate foreign films - perhaps once every 100 films

// Generate Movies:

function generateMovie(count) {
  var newFilm = {
    newID: count,
    newTitle: faker.lorem.words,
    newTitleURL: newTitle.replace(' ', '_'),
    newPoster: faker.image.image,
    newBackdrop: faker.image.image
  };
  return newFilm;
}
// const Movies

// id - generated INT
// title - faker.lorem.words
// title_url - generate from title remove punctuation and replacing spaces with underscores
//             title.replace(regexp, '_');
// poster_path - faker.image.image
// backdrop_path - faker.image.image

// Generate Critics:

function generateCritic(track) {
  var newCritic = {
    idCritic: track,
    topCritic: Math.floor(Math.random() * 2),
    name: faker.name.findName(),
    newImage: faker.image.avatar,
    org: faker.company.companyName
  };
  return newCritic;
}

// const Critics

// id - generated INT
// top_critic - Math.floor(Math.random() * 2)
// name - faker.name.findName(),
// img_ur- image - faker.image.avatar
// organization - faker.company.companyName

// Generate Reviews:

function generateReviews(marker, film, crit) {
  var newReview = {
    reviewID: marker,
    newDate: Math.floor(Math.random() * 2),
    fresh: Math.floor(Math.random() * 2),
    reviewText: () => {
      generatorChoice = Math.floor(Math.random() * 3) + 1;
      switch(generatorChoice){
        case 1:
          return faker.lorem.sentences;
        case 2:
          return faker.lorem.paragraph;
        case 3:
          return faker.lorem.paragraphs;
      }
    },
    idFilm: film,
    idCrit: crit,
    rating: Math.floor(Math.random() * 10)
  };
  return newReview;
}

// const Reviews

// id - generated INT
// review_date - generated date within the last three years - must be bounded within one month with other reviews for the same movie
//               faker.date.between('2016-03-19', '2019-03-19);
//               one way to cluster dates would be to set an opening column on the film table
//               that way the faker date could be set to the three month period following the opening
//               otherwise the first review for a given film would have to tracked or each new review
//               for a film would have to be compared to the dates of the reviews already generated for
//               the film - both of which are more complex solutions
// fresh - Math.floor(Math.random() * 2)
// review_text - faker.lorem.sentences, faker.lorem.paragraph, faker.lorem.paragraphs
// movie_id - foreign key from movie db
// critic_id - foreign from id in this db
// score - generated number from 0-10 with two decimal places - Math.floor(Math.random() * 10)

module.exports = generateData