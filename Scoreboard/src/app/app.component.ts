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
    rotten = 0;
    fresh = 0;
    tomatoMeter=0;
    videoUrl=null;
    posterUrl= environment.url + 'assets/img/poster.default.gif';
    backdropUrl= environment.url + 'assets/img/backdrop.default.jpg';

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
        console.log(data);
      });
    }
}
