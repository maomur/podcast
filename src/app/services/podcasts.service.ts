import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  private apiUrl = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
  }
}