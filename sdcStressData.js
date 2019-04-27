'use strict';
module.exports = {
  generateReview
};

function generateReview(userContext, events, done) {
  var freshRev = 'newDate=2019-04-16&fresh=0&reviewText=\'This%20is%20a%20review.\'&idFilm=' +
   (Math.floor(Math.random() * 500000) + 1) + '&idCrit=' + (Math.floor(Math.random() * 250000) + 1) +
   '&rating=' + (Math.floor(Math.random() * 9) + 1) + '.' + (Math.floor(Math.random() * 9) + 1);
   userContext.vars.freshRev = freshRev;
  return done();
}