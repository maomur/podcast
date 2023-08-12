import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  private apiUrl = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  private detailPodcastUrl = '/api/lookup?id=934552872&media=podcast&entity=podcastEpisode&limit=20'

  constructor(private httpClient: HttpClient) { }

  //Recuperar Todos los Podcast
  getData(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
  }

  //Recuperar Detalle Podcast NO HABILITADO - USAMOS CORSORIGIN EN "podcast-details.component.js"
  getDetailPodcast(): Observable<any> {
    return this.httpClient.get(this.detailPodcastUrl)
  }



}
