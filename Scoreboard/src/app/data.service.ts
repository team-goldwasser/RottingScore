import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getMovieInfo(title_url) {
    return this.http.get(`${environment.url}m/movieinfo/${title_url}`);

  }
}
