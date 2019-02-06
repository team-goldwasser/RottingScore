/*
-- Query: SELECT * FROM rt.movies
LIMIT 0, 1000

-- Date: 2019-01-31 18:55
*/
CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `title_url` varchar(255) DEFAULT NULL,
  `tmdb_poster_path` varchar(255) DEFAULT NULL,
  `tmdb_backdrop_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (24428,'The Avengers','the_avengers','/cezWGskPY5x7GaglTTRN4Fugfb8.jpg','/cezWGskPY5x7GaglTTRN4Fugfb8.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (27205,'Inception','inception','/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg','/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (102899,'Ant-Man','antman','/D6e8RJf2qUstnfkTslTXNTUAlT.jpg','/D6e8RJf2qUstnfkTslTXNTUAlT.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (118340,'Guardians of the Galaxy','guardians_of_the_galaxy','/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg','/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (122917,'The Hobbit: The Battle of the Five Armies','the_hobbit_the_battle_of_the_five_armies','/9zRzFJuaj0CHIOhAkcCcFTvyu2X.jpg','/9zRzFJuaj0CHIOhAkcCcFTvyu2X.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (141052,'Justice League','justice_league','/eifGNCSDuxJeS1loAXil5bIGgvC.jpg','/eifGNCSDuxJeS1loAXil5bIGgvC.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (157336,'Interstellar','interstellar','/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg','/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (169917,'A Walk Among the Tombstones','a_walk_among_the_tombstones','/xxe77USOk2tPnq7G4cL42gf1OxQ.jpg','/xxe77USOk2tPnq7G4cL42gf1OxQ.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (181808,'Star Wars: The Last Jedi','star_wars_the_last_jedi','/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg','/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (245891,'John Wick','john_wick','/5vHssUeVe25bMrof1HyaPyWgaP.jpg','/5vHssUeVe25bMrof1HyaPyWgaP.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (260513,'Incredibles 2','incredibles_2','/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg','/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (263115,'Logan','logan','/gGBu0hKw9BGddG8RkRAMX7B6NDB.jpg','/gGBu0hKw9BGddG8RkRAMX7B6NDB.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (280217,'The Lego Movie 2: The Second Part','the_lego_movie_2_the_second_part','/QTESAsBVZwjtGJNDP7utiGV37z.jpg','/QTESAsBVZwjtGJNDP7utiGV37z.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (284053,'Thor: Ragnarok','thor_ragnarok','/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg','/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (284054,'Black Panther','black_panther','/uxzzxijgPIY7slzFvMotPv8wjKA.jpg','/uxzzxijgPIY7slzFvMotPv8wjKA.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (297802,'Aquaman','aquaman','/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg','/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (299536,'Avengers: Infinity War','avengers_infinity_war','/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg','/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (315064,'Animal Crackers','animal_crackers','/4Z80OqqLV9t5bFuE9itUN8YhgFa.jpg','/4Z80OqqLV9t5bFuE9itUN8YhgFa.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (324857,'Spider-Man: Into the Spider-Verse','spiderman_into_the_spiderverse','/laMM4lpQSh5z6KIBPwWogkjzBVQ.jpg','/laMM4lpQSh5z6KIBPwWogkjzBVQ.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (332562,'A Star Is Born','a_star_is_born','/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg','/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (335983,'Venom','venom','/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg','/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (337167,'Fifty Shades Freed','fifty_shades_freed','/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg','/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (338952,'Fantastic Beasts: The Crimes of Grindelwald','fantastic_beasts_the_crimes_of_grindelwald','/kQKcbJ9uYkTQql2R8L4jTUz7l90.jpg','/kQKcbJ9uYkTQql2R8L4jTUz7l90.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (339380,'On the Basis of Sex','on_the_basis_of_sex','/izY9Le3QWtu7xkHq7bjJnuE5yGI.jpg','/izY9Le3QWtu7xkHq7bjJnuE5yGI.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (345887,'The Equalizer 2','the_equalizer_2','/cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg','/cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (348350,'Solo: A Star Wars Story','solo_a_star_wars_story','/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg','/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (351044,'Welcome to Marwen','welcome_to_marwen','/o45VIAUYDcVCGuzd43l8Sr5Dfti.jpg','/o45VIAUYDcVCGuzd43l8Sr5Dfti.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (351286,'Jurassic World: Fallen Kingdom','jurassic_world_fallen_kingdom','/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg','/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (353081,'Mission: Impossible - Fallout','mission_impossible__fallout','/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg','/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (360920,'The Grinch','the_grinch','/stAu0oF6dYDhV5ssbmFUYkQPtCP.jpg','/stAu0oF6dYDhV5ssbmFUYkQPtCP.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (363088,'Ant-Man and the Wasp','antman_and_the_wasp','/rv1AWImgx386ULjcf62VYaW8zSt.jpg','/rv1AWImgx386ULjcf62VYaW8zSt.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (369972,'First Man','first_man','/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg','/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (375262,'The Favourite','the_favourite','/4hgPWxYeGWtTEx9BPhUo99wj77z.jpg','/4hgPWxYeGWtTEx9BPhUo99wj77z.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (381288,'Split','split','/rXMWOZiCt6eMX22jWuTOSdQ98bY.jpg','/rXMWOZiCt6eMX22jWuTOSdQ98bY.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (383498,'Deadpool 2','deadpool_2','/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg','/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (390874,'Ashes in the Snow','ashes_in_the_snow','/3ZiWWoDU4RFYUgQNa6lUdHS1mxL.jpg','/3ZiWWoDU4RFYUgQNa6lUdHS1mxL.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (394741,'Stan & Ollie','stan_and_ollie','/7ypYkp97TQzXCdK19sNSxTfXFk3.jpg','/7ypYkp97TQzXCdK19sNSxTfXFk3.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (400650,'Mary Poppins Returns','mary_poppins_returns','/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg','/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (401469,'Widows','widows','/tvmPiTShsfp4vSUBFsCHYaX9M7i.jpg','/tvmPiTShsfp4vSUBFsCHYaX9M7i.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (401847,'Can You Ever Forgive Me?','can_you_ever_forgive_me?','/hPuZR2bFoV0kuBrA98exWyvTf40.jpg','/hPuZR2bFoV0kuBrA98exWyvTf40.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (404368,'Ralph Breaks the Internet','ralph_breaks_the_internet','/lvfIaThG5HA8THf76nghKinjjji.jpg','/lvfIaThG5HA8THf76nghKinjjji.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (405774,'Bird Box','bird_box','/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg','/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (414919,'Hart Beat','hart_beat','/h1PBdhD1c6xnTV6c7B4d58OESYB.jpg','/h1PBdhD1c6xnTV6c7B4d58OESYB.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (418472,'The Wild Pear Tree','the_wild_pear_tree','/9QNUj1e6MdyuRKxWg4v2riG97In.jpg','/9QNUj1e6MdyuRKxWg4v2riG97In.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (424139,'Halloween','halloween','/bXs0zkv2iGVViZEy78teg2ycDBm.jpg','/bXs0zkv2iGVViZEy78teg2ycDBm.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (424694,'Bohemian Rhapsody','bohemian_rhapsody','/gbmkFWdtihe1VfydTDsieQ6VfGL.jpg','/gbmkFWdtihe1VfydTDsieQ6VfGL.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (424783,'Bumblebee','bumblebee','/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg','/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (426426,'Roma','roma','/dtIIyQyALk57ko5bjac7hi01YQ.jpg','/dtIIyQyALk57ko5bjac7hi01YQ.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (429197,'Vice','vice','/e0NZxqQ4B8YZ6kRrZish2DPqtdi.jpg','/e0NZxqQ4B8YZ6kRrZish2DPqtdi.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (429202,'Vox Lux','vox_lux','/xmFOjB5bGvFqNzsX5TbIWzdvpGd.jpg','/xmFOjB5bGvFqNzsX5TbIWzdvpGd.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (438799,'Overlord','overlord','/l76Rgp32z2UxjULApxGXAPpYdAP.jpg','/l76Rgp32z2UxjULApxGXAPpYdAP.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (440298,'Cold War','cold_war','/wsv6vWhJyRhwzmDN4kjs3ACV97Q.jpg','/wsv6vWhJyRhwzmDN4kjs3ACV97Q.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (440444,'Piercing','piercing','/t0bRKXJ3nstSokrtMoHVz2t3sIN.jpg','/t0bRKXJ3nstSokrtMoHVz2t3sIN.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (440472,'The Upside','the_upside','/jmjmDPEEyIrITQ3WRNEUOcYLqse.jpg','/jmjmDPEEyIrITQ3WRNEUOcYLqse.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (446021,'Bad Times at the El Royale','bad_times_at_the_el_royale','/iNtFgXqXPRMkm1QO8CHn5sHfUgE.jpg','/iNtFgXqXPRMkm1QO8CHn5sHfUgE.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (449563,'Isn\'t It Romantic','isn\'t_it_romantic','/5xNBYXuv8wqiLVDhsfqCOr75DL7.jpg','/5xNBYXuv8wqiLVDhsfqCOr75DL7.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (450001,'Master Z: Ip Man Legacy','master_z_ip_man_legacy','/puPdv7xyTM8Zidli3TPjWbAPcWJ.jpg','/puPdv7xyTM8Zidli3TPjWbAPcWJ.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (450465,'Glass','glass','/gt5KPtwDMeIOPdVfmjYlFw9EetE.jpg','/gt5KPtwDMeIOPdVfmjYlFw9EetE.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (452832,'Serenity','serenity','/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg','/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (453755,'Arctic','arctic','/w9GVlRteCgY103DN8CdFik3HUhO.jpg','/w9GVlRteCgY103DN8CdFik3HUhO.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (454294,'The Kid Who Would Be King','the_kid_who_would_be_king','/aWENxGrJmXmHvifG6x2aYnpovXI.jpg','/aWENxGrJmXmHvifG6x2aYnpovXI.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (457136,'Mary Queen of Scots','mary_queen_of_scots','/b5RMzLAyq5QW6GtN9sIeAEMLlBI.jpg','/b5RMzLAyq5QW6GtN9sIeAEMLlBI.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (463272,'Johnny English Strikes Again','johnny_english_strikes_again','/ryACHOzmRJiJEKjatbokudfkO74.jpg','/ryACHOzmRJiJEKjatbokudfkO74.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (463684,'Velvet Buzzsaw','velvet_buzzsaw','/3rViQPcrWthMNecp5XnkKev6BzW.jpg','/3rViQPcrWthMNecp5XnkKev6BzW.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (465914,'If Beale Street Could Talk','if_beale_street_could_talk','/qhUIOTSi3kr4290tKrVyeriyvrv.jpg','/qhUIOTSi3kr4290tKrVyeriyvrv.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (466282,'To All the Boys I\'ve Loved Before','to_all_the_boys_i\'ve_loved_before','/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg','/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (471507,'Destroyer','destroyer','/r09pvRkUKxKa9uHyMifpMHnA38a.jpg','/r09pvRkUKxKa9uHyMifpMHnA38a.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (480530,'Creed II','creed_ii','/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg','/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (483906,'Polar','polar','/qOBEpKVLl8Q9CZScbOcRRVISezV.jpg','/qOBEpKVLl8Q9CZScbOcRRVISezV.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (484247,'A Simple Favor','a_simple_favor','/aIYsjQM0piKc0ibPBCTWv3sqshj.jpg','/aIYsjQM0piKc0ibPBCTWv3sqshj.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (487558,'BlacKkKlansman','blackkklansman','/55W6mUVv4CXMMQHHhV2zXtLSpXQ.jpg','/55W6mUVv4CXMMQHHhV2zXtLSpXQ.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (487672,'Reign of the Supermen','reign_of_the_supermen','/jKqe91SItNh7NWs52yiu8xNOFsj.jpg','/jKqe91SItNh7NWs52yiu8xNOFsj.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (489999,'Searching','searching','/pk9R56ZFlofbBzfwBnHlDyg5DMs.jpg','/pk9R56ZFlofbBzfwBnHlDyg5DMs.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (490132,'Green Book','green_book','/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg','/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (491622,'Manikarnika','manikarnika','/3myAsvD8IKTUsyeBLtrXsR2uWzp.jpg','/3myAsvD8IKTUsyeBLtrXsR2uWzp.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (493488,'Buffalo Boys','buffalo_boys','/kjrJCUYriu3cxzBKa5iuIXzEOD6.jpg','/kjrJCUYriu3cxzBKa5iuIXzEOD6.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (503314,'Dragon Ball Super: Broly','dragon_ball_super_broly','/f03YksE4NggUjG75toz4H1YAGRf.jpg','/f03YksE4NggUjG75toz4H1YAGRf.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (503616,'Second Act','second_act','/maUMIZVGs8g1hYtq4dQ9Lg9FtVF.jpg','/maUMIZVGs8g1hYtq4dQ9Lg9FtVF.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (504172,'The Mule','the_mule','/t0idiLMalKMj2pLsvqHrOM4LPdQ.jpg','/t0idiLMalKMj2pLsvqHrOM4LPdQ.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (508763,'A Dog\'s Way Home','a_dog\'s_way_home','/pZn87R7gtmMCGGO8KeaAfZDhXLg.jpg','/pZn87R7gtmMCGGO8KeaAfZDhXLg.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (514710,'Modest Heroes','modest_heroes','/5jURYLaG6BX0klRHsiHc3pzOlOm.jpg','/5jURYLaG6BX0klRHsiHc3pzOlOm.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (516630,'The Standoff at Sparrow Creek','the_standoff_at_sparrow_creek','/uCyDJGQ54vcCclNqa6nLcSqH3DQ.jpg','/uCyDJGQ54vcCclNqa6nLcSqH3DQ.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (522681,'Escape Room','escape_room','/8yZAx7tlKRZIg7pJfaPhl00yHIQ.jpg','/8yZAx7tlKRZIg7pJfaPhl00yHIQ.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (547760,'Canal Street','canal_street','/wul9VJ0J7drwOcJT19ILqjILfu0.jpg','/wul9VJ0J7drwOcJT19ILqjILfu0.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (561362,'Rust Creek','rust_creek','/rd8kbkcvdNTByYKDqY2FyxlhhCy.jpg','/rd8kbkcvdNTByYKDqY2FyxlhhCy.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (564147,'K.G.F: Chapter 1','kgf_chapter_1','/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg','/ltHlJwvxKv7d0ooCiKSAvfwV9tX.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (567604,'Once Upon a Deadpool','once_upon_a_deadpool','/5Ka49BWWyKMXr93YMbH5wLN7aAM.jpg','/5Ka49BWWyKMXr93YMbH5wLN7aAM.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (567738,'American Hangman','american_hangman','/nWQTrJU71YpChiAZAmGH3RLtsfK.jpg','/nWQTrJU71YpChiAZAmGH3RLtsfK.jpg');
INSERT INTO `rt.movies` (`id`,`title`,`title_url`,`tmdb_poster_path`,`tmdb_backdrop_path`) VALUES (567860,'Fyre','fyre','/yFsP0BAJhAH3RTXCAnGvI1CtaUb.jpg','/yFsP0BAJhAH3RTXCAnGvI1CtaUb.jpg');
