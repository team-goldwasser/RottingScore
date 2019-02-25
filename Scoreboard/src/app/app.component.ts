import { Component, OnInit } from '@angular/core';
import { config } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
    //set default state
    title = 'Untitled';

    //Image/Vid Defaults
    videoUrl=null;
    posterUrl= environment.url + 'assets/img/poster.default.gif';
    backdropUrl= environment.url + 'assets/img/backdrop.default.jpg';

    //Tomato Meter Defaults
    tomotoMeter=60;
    avgRating=5.0;
    numReviews=50;
    rotten = 0;
    fresh = 0;
    criticConsensus='Some random review goes here';
    criticRatingImg = environment.url + 'assets/img/large-fresh.png';

    //User Defaults
    usrScore = 'N/A';
    avgUsrRating = 5.0;
    numUsrReviews = 100;
    usrRatingImg = environment.url + 'assets/img/no-audience.png';



    constructor(private data: DataService) {

    }

    ngOnInit() {
      var url = window.location.href;
      if (url[url.length-1]==='/') {
        url = url.substring(0,url.length-1);
      }
      var urlArray = url.split('/');
      var title_url = urlArray[urlArray.length-1];
      this.data.getMovieInfo(title_url).subscribe(data => {
        this.title=data['title'];
        this.posterUrl=data['poster_url'];
        this.backdropUrl=data['backdrop_url'];
      });

      this.data.getTomotometer(title_url).subscribe(data => {
        console.log(data);
        this.tomotoMeter=Math.round(data['tomatometer']);
        this.avgRating=data['avgrating'];
        this.numReviews=data['numOfReviews'];
        this.rotten = data['rotten'];
        this.fresh = data['fresh'];
        this.criticConsensus = data['randomReview'].substring(0,137) + "...";

        if (this.tomotoMeter > 75) {
          this.criticRatingImg = environment.url + 'assets/img/large-certified.png';
        } else if (this.tomotoMeter >= 55 && this.tomotoMeter<75) {
          this.criticRatingImg = environment.url + 'assets/img/large-fresh.png';
        } else {
          this.criticRatingImg = environment.url + 'assets/img/large-rotten.png';
        }


        // avgrating: 8.7
        // fresh: 436
        // id: 284054
        // numOfReviews: 450
        // randomReview: "The film completely integrates ancient rituals and traditions with sober sci-fi and modern technology."
        // rotten: 14
        // title_url: "black_panther"
        // tomatometer: 96.9
      });
    }
}
