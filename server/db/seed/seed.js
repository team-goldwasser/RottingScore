var fs = require('fs');

var knex = require('knex')({
  client: 'mysql',
  version: '5.7',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'password',
    multipleStatements: true
  }
});

//Any review greater than this will be considered fresh
const freshReview = 5.0

var sql = fs.readFileSync('./server/db/seed/database_base_data.sql').toString();
console.log('Loaded SQL insert statements, starting drop of database if exists');
console.log('This may take a bit');

knex.raw('DROP DATABASE IF EXISTS scorecard')
  .then(() => {
    console.log('Dropped scroecard database now (re)creating');
    return knex.raw('CREATE DATABASE scorecard');
  })
  .then(() => {
    console.log('As the connection to the database was killed destroy and recreate knex to prevent errors');
    knex.destroy();
    knex = require('knex')({
      client: 'mysql',
      version: '5.7',
      connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'scorecard',
        multipleStatements: true
      }
    });
    console.log('Now create the tables and insert the base movies and scraped critic reviews for blank panther.');
    return;
  })
  .then(() => knex.raw(sql))
  .then(() => {
    console.log('Old Database Dropped and Recreated with Base Critics');
    console.log('Starting to generate Fake Reviews for each of the movies');

    populate_reviews();
  });




function populate_reviews () {
  var critic_reviews = [];

  knex('movies').select(['id'])
    .then(function(results) {
      for (var i = 0; i < results.length; i++) {
      //prevent reviews for black panther
        if (results[i].id !== 284054 ) {
          let movie_id = results[i].id;
          //create a starting score that will ultimately decide whether the movie is rotten, fresh or certified fresh
          //This starting score will be between 3 and 8
          let startRandom = (3 + Math.floor(Math.random() * 5));
          //get a few top critics between 2 and 5
          knex('critics').select(['id']).where({'top_critic': true}).orderByRaw('Rand()').limit(2 + Math.round(Math.random() * 3))
            .then(function(results) {
              for (var i = 0; i < results.length; i++) {
                let review = {};
                review.critic_id = results[i].id;
                review.movie_id = movie_id;
                //this will create a review score that is between 3 and 10 using the starting score per movie
                //and a random score per review between 0 and 2 that will give it two decimal places
                review.score = (startRandom + Math.round((Math.random() * (2)) * 10) / 10);
                if (review.score > freshReview) {
                  review.fresh = true;
                } else {
                  review.fresh = false;
                }
                review.review_text = randomText();
                review.review_date = randomDate(new Date(2010, 0, 1), new Date());
                critic_reviews.push(review);
              }
            });
          //get between 50 and 90 non top critics
          knex('critics').select(['id']).where({'top_critic': false}).orderByRaw('Rand()').limit((50 + Math.floor(Math.random() * 40)))
            .then(function(results) {
              for (var i = 0; i < results.length; i++) {
                let review = {};
                review.critic_id = results[i].id;
                review.movie_id = movie_id;
                //this will create a review score that is between 3 and 10 using the starting score per movie
                //and a random score per review between 0 and 2 that will give it two decimal places
                review.score = (startRandom + Math.round((Math.random() * (2)) * 10) / 10);
                if (review.score > freshReview) {
                  review.fresh = true;
                } else {
                  review.fresh = false;
                }
                review.review_text = randomText();
                review.review_date = randomDate(new Date(2010, 0, 1), new Date());
                critic_reviews.push(review);
              }
            });
        }

      }
    }).then(function() {
      console.log('Starting insert in 1 second');
      setTimeout(function () {

        knex('critic_reviews').insert(critic_reviews)
          .then(function(results) {
            console.log('check the database!!');
            process.exit();
          });
      }, 1000);

    });
}


function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomText() {
  //an array of paragraphs of ipsum from monty python, zombie, godfather, star wars, dexter and samuel jackson
  var ipsum = [
    'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.',
    'Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead. ',
    'Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?',
    'In Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading. Maleficia! Vel cemetery man a modern bursting eyeballs perhsaps morbi. A terrenti flesh contagium. Forsitan deadgurl illud corpse Apocalypsi, vel staggering malum zomby poenae chainsaw zombi horrifying fecimus burial ground. Indeflexus shotgun coup de poudre monstra per plateas currere. Fit de decay nostra carne undead. Poenitentiam violent zom biehig hway agite RE:dead pœnitentiam! Vivens mortua sunt apud nos night of the living dead.',
    'Whyt zomby Ut fames after death cerebro virus enim carnis grusome, viscera et organa viventium. Sicut spargit virus ad impetum, qui supersumus flesh eating. Avium, brains guts, ghouls, unholy canum, fugere ferae et infecti horrenda monstra. Videmus twenty-eight deformis pale, horrenda daemonum. Panduntur brains portae rotting inferi. Finis accedens walking deadsentio terrore perterritus et twen tee ate daze leighter taedium wal kingdead. The horror, monstra epidemic significant finem. Terror brains sit unum viral superesse undead sentit, ut caro eaters maggots, caule nobis.',
    'Godfather ipsum dolor sit amet. Mr Corleone is Johnny Fontane\'s godfather. Now Italians regard that as a very close, a very sacred religious relationship. Only don\'t tell me you\'re innocent. Because it insults my intelligence and makes me very angry. I\'m gonna make him an offer he can\'t refuse. Never hate your enemies. It affects your judgment.',
    'We\'re both part of the same hypocrisy, senator, but never think it applies to my family. I know it was you, Fredo. You broke my heart. You broke my heart! This one time, this one time I\'ll let you ask me about my affairs. Don\'t you know that I would use all of my power to prevent something like that from happening? I am sorry. What happened to your father was business. I have much respect for your father. But your father, his thinking is old-fashioned. You must understand why I had to do that. Now let\'s work through where we go from here',
    'Very well. You want to do business with me. I will do business with you. Te salut, Don Corleone. I see you took the name of the town. What was your father\'s name? Leave the gun. Take the cannoli. When they come... they come at what you love.',
    'Hey, listen, I want somebody good - and I mean very good - to plant that gun. I don\'t want my brother coming out of that toilet with just his dick in his hands, alright? I want your answer and the money by noon tomorrow. And one more thing. Don\'t you contact me again, ever. From now on, you deal with Turnbull. It\'s a Sicilian message. It means Luca Brasi sleeps with the fishes. You can act like a man! Don Corleone, I am honored and grateful that you have invited me to your home on the wedding day of your daughter. And may their first child be a masculine child',
    'If anything in this life is certain, if history has taught us anything, it is that you can kill anyone. Vito, how do you like my little angel? Isnt she beautiful? My fathers name was Antonio Andolini... and this is for you. Never let anyone know what you are thinking. Whats the matter with you? Is this what youve become, a Hollywood finocchio who cries like a woman? "Oh, what do I do? What do I do?" What is that nonsense? Ridiculous!',
    'Is that why you slapped my brother around in public? In Sicily, women are more dangerous than shotguns. Friends and money - oil and water. It\'s not personal. It\'s business. I don\'t feel I have to wipe everybody out, Tom. Just my enemies.',
    'I don\'t trust a doctor who can hardly speak English. Fredo, you\'re my older brother, and I love you. But don\'t ever take sides with anyone against the Family again. Ever. Why did you go to the police? Why didn\'t you come to me first? It\'s an old habit. I spent my whole life trying not to be careless. Women and children can afford to be careless, but not men. I don\'t like violence, Tom. I\'m a businessman; blood is a big expense.',
    'You talk about vengeance. Is vengeance going to bring your son back to you? Or my boy to me? Sonny, please don\'t do anything. Please don\'t do anything. My father taught me many things here - he taught me in this room. He taught me: keep your friends close, but your enemies closer. Do me this favor. I won\'t forget it. Ask your friends in the neighborhood about me. They\'ll tell you I know how to return a favor. That\'s my family Kay, that\'s not me',
    'Well, the way they make shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and become television programs. Some don\'t, become nothing. She starred in one of the ones that became nothing.',
    'My money\'s in that office, right? If she start giving me some bullshit about it ain\'t there, and we got to go someplace else and get it, I\'m gonna shoot you in the head then and there. Then I\'m gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I\'m talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?',
    'Well, the way they make shows is, they make one show. That show\'s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they\'re going to make more shows. Some pilots get picked and become television programs. Some don\'t, become nothing. She starred in one of the ones that became nothing.',
    'Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?',
    'Red Five standing by. What!? I care. So, what do you think of her, Han? A tremor in the Force. The last time I felt it was in the presence of my old master. What good is a reward if you ain\'t around to use it? Besides, attacking that battle station ain\'t my idea of courage. It\'s more like…suicide',
    'Like a sloth. I can do that. Rorschach would say you have a hard time relating to others. I love Halloween. The one time of year when everyone wears a mask … not just me. Tonight\'s the night. And it\'s going to happen again and again. It has to happen.',
    'Under normal circumstances, I\'d take that as a compliment. God created pudding, and then he rested. I\'m real proud of you for coming, bro. I know you hate funerals. I\'m not the monster he wants me to be. So I\'m neither man nor beast. I\'m something new entirely. With my own set of rules. I\'m Dexter. Boo.',
    'And the hat. She\'s a witch! She looks like one. Well, I didn\'t vote for you. Shut up! Burn her anyway! Well, what do you want?',
    'Bring her forward! Now, look here, my good man. Well, what do you want? Oh! Come and see the violence inherent in the system! Help, help, I\'m being repressed!',
    'Ah, now we see the violence inherent in the system! A newt? Burn her anyway! Bloody Peasant! Well, Mercia\'s a temperate zone!',
    'Where\'d you get the coconuts? Where\'d you get the coconuts? On second thoughts, let\'s not go there. It is a silly place. What a strange person. I\'m not a witch. You don\'t vote for kings.',
    'I dunno. Must be a king. Well, Mercia\'s a temperate zone! Well, how\'d you become king, then? Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.'
  ];
  var randomIndex = Math.floor((Math.random() * (ipsum.length - 1)));

  if (ipsum[randomIndex].length < 250) {
    return ipsum[randomIndex];
  } else {
    return ipsum[randomIndex].substr(0, 251) + '...';
  }

}