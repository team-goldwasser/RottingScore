# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Inserted Movie Title Data for Rotten Tomato Clone
As our project will use movie titles as the id for items to be shared amongst us, I downloaded 89 movie titles from theMovieDatabase api and used it as our items.  I have set this to be served from an endpoint /m/movieinfo/:id searchable by tMDB movie id or a titleurl.

### Scraping Rotten Tomatoes Critic Reviews:
In order to have one item page with real data for a demo I decided to get the reviews into my database for Blank Panther as this was the most reviewed movie of the top 100 movies on Rotten Tomatoes.  I originally used cheerio to try to acomplish this, but as the reviews were javascript rendered I also had to add Pupetter to get the reviews after the page load.  One blocker that I experienced was Pupeteer failing often taking too long to load a page and it crashing almost every time.  Puppeteer uses a specific version of Chromium that is by default installed with it when you install node to make sure all the chrome dev tools calls it uses on all its features works.  I guessed that rotten tomatoes and most popular sites knew this and as Chromium was not used by a large population can be slowing down responses to this specific version to crash any attempts to scrape the site.  Whether this was the case or the fact that my Chrome has alot of the images in cache etc, I learned how to route puppeteer to use my own installation of Chrome instead and upon doing this had success using Cheerio to grab the correct data and place it into my mysql database with knex.

### Generated Fake Critic Reviews
I created a script that generates fake reviews with a random score range per movie in the database.  I reused the critics that I got from the Blank Panther reviews with fake headshots from loweripsum and review text from different movie based funny lorem ipsum generators including Samuel Jackson, Monty Python Holy Grail, Godfather and Zombie ipsums.   I put around 100 reviews per movie inside the database with all the data necessary for my scoreboard.  I then created an endpoint that serves up the score information on a per movie basis that gets the average of the positive reviews to the negative reviews as the tomatometer score(this is how rotten tomato does it) and the average score out of 10, a random top critic review, number of reviews and fresh/rotten reviews.

### Created Endpoints for Tomatometer and MovieInfo
I created the backend API for tomatometer data based off of the Title_URL which we will pass into the endpoints by getting it from the url.  I utilized alot of the logic that RT uses when calculating there critic score by not so much incorporating the rating the critics give but whether the review was generally positive and negative and taking the average of that.  I generated the proper helper functions for connecting with Knex and a MySQL database and tested and got the correct responses back.

###Created Express Server and BackEnd Testing with Jest
Utilized Jest to do testing of my api with supertest and also tested all my database helper function for both the normal results and also tested for incorrect ID's and wrong url's to make sure it properly handled these cases.

###Built Proxy Server index.html page with responsive CSS @media queries with Navbar and Sidebar
I mocked the design of the outer static edges of the Rottten Tomato Item Page including Navbar/Sidebar etc.  I noticed that alot of changes happen on RT's site when going below 767 pixels and learned how to use @media CSS calls to handle these changes which includes compacting the header bar, rmeoving a couple of elements or shortenening them as required, as well as allowing overflow to shrinking elements at lower pixel ratings.