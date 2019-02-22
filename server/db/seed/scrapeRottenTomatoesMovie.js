const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

var knex = require('./config.js').knex;
//ROTTEN TOMATOES CRITIC REVIEW SCRAPER
//NOTE: YOU SHOULD SHUT DOWN ALL MEMORY/CPU HOGS BEFORE ATTEMTPING
//BE SURE ALL PROPERTIES ARE CORRECTLY SET BEFORE STARTING: node ./server/scrapeRottenTomatoesMovie.js
//IF MORE THAN ONE MOVIE IS SCRAPED WILL NEED LOGIC TO FIND CRITIC ID WITHOUT DUPES
//BASE URL: Go to the movie and click all critics in the critic review section to find
const url = 'https://www.rottentomatoes.com/m/black_panther_2018/reviews/';
//Starting page number should be 1 unless it crashed
const startPage = 1;
//Check the base URL for the maximum number of pages on the reviews page for the movie your attempting and set it here
const maxPage = 23;
//Set this with the movie ID listed in the database. Currently set for Blank Panther
const db_movie_id = 284054;
//The starting Critic ID is the last Critic ID in the db + 1
const startCritic = 1;
//Executable Path to Chrome notice a \ has to be listed twice on windows not sure on Linux
const execPath = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe';
var browser = puppeteer.launch({executablePath: execPath})
  .then(function (browser) {
    return browser.newPage();
  })
  .then(function (page) {
    page.goto(url).then(function() {
      console.log('went to the site');
      grabReviews(page.content(), url, startPage, startCritic);
    });
  });

function grabReviews(content, baseurl, pageNumber, criticidstart) {
  content.then(function (html) {
    //success we got the HTMl! Now lets create some arrays to insert into the database
    let critics = [];
    let reviews = [];
    let $ = cheerio.load(html);
    $('.review_table_row', '#reviews').each(function (i, elem) {
      //create a review and critic object from the data we got from the page
      //create corresponding properties with the fields in the database
      let review = {};
      let critic = {};

      review.movie_id = db_movie_id;
      if (i % 2 === 0) {
        critic.img_url = '/img/user_none.jpg';
      } else {
        critic.img_url = 'http://lorempixel.com/50/50/people/';
      }

      let namedata = $(this).children('.col-xs-8').children('.critic_name');
      critic.name = namedata.children('.bold').text();
      critic.organization = namedata.find('.subtle').text();
      var topCritic = $(this).children('.col-xs-8').children('.top_critic');
      if (topCritic.children().is('.small')) {
        critic.top_critic = true;
      } else {
        critic.top_critic = false;
      }

      let reviewdata = $(this).children('.review_container');
      if (reviewdata.children().is('.fresh')) {
        review.fresh = true;
      } else {
        review.fresh = false;
      }
      review.review_date = new Date(reviewdata.find('.review_date').text());
      review.review_text = ((reviewdata.find('.the_review').text()).trim()).replace(/\'/g, '');
      review.score = 8.7;
      critics.push(critic);
      review.critic_id = criticidstart + critics.length - 1;
      reviews.push(review);
    });
    //insert our critics and our reviews array into the database
    console.log(critics);
    knex('critics').insert(critics)
      .then(function (result) {
        console.log(result);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(reviews);
    knex('critic_reviews').insert(reviews)
      .then(function (result) {
        console.log(result);
      })
      .catch(function(error) {
        console.log(error);
      });
    if (pageNumber < maxPage) {
      //load the next page of results
      pageNumber++;
      let criticNum = criticidstart + critics.length;
      setTimeout(function () {
        callNext(pageNumber, criticNum);
      }, (20000 + Math.floor(Math.random * 10000)));
    }
  });



}

function callNext(pageNum, criticNum) {
  browser = puppeteer.launch({executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'})
    .then(function (browser) {
      return browser.newPage();
    })
    .then(function (page) {
      page.goto((url + '?page=' + pageNum + '&sort=')).then(function() {
        console.log('went to the site' + pageNum);
        grabReviews(page.content(), (url + '?page=' + pageNum + '&sort='), pageNum, criticNum);
      });
    });
}
