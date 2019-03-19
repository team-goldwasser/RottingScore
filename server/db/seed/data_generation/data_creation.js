const faker = require('faker');

// var sbData = [];

// function (total){
  // for (tally = 0; tally <= total; tally++) {
    // generate entry and push to container
    // consider need for async in each faker call
  // }
  // return container (or save?)
// }

// API Combination Example:

// faker.fake({{name.lastName}}, {{name.firstName}})

// Consider changing region settings for some small subset of
// films to generate foreign films - perhaps once every 100 films

// Generate Movies:

// const Movies

// id - generated INT
// title - faker.lorem.words
// title_url - generate from title remove punctuation and replacing spaces with underscores
//             title.replace(regexp, '_');
// poster_path - faker.image.image
// backdrop_path - faker.image.image

// Generate Critics:

// const Critics

// id - generated INT
// top_critic - Math.floor(Math.random() * 2)
// name - faker.name.findName(),
// img_ur- image - faker.image.avatar
// organization - faker.company.companyName

// Generate Reviews:

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
