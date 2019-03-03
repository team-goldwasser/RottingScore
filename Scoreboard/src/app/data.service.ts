import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getMovieInfo(titleUrl) {
    return this.http.get(`${environment.url}m/movieinfo/${titleUrl}`);

  }

  getTomotometer(titleUrl) {
    return this.http.get(`${environment.url}cr/tomotometer/${titleUrl}`);

  }

  getTopCriticScore(titleUrl) {
    return this.http.get(`${environment.url}cr/topcriticmeter/${titleUrl}`);
  }

  getUserReviewInfo(movieId) {
    return this.http.get(`${environment.usersUrl}reviews/scoreboard/${movieId}`);
  }
}
