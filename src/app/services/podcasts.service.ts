import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { PodcastDetails } from '../interfaces/podcast-contents';
import { SpinnerserviceService } from './spinnerservice.service';


@Injectable({
  providedIn: 'root'
})
export class PodcastsService {

  private apiUrl = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  //private episodesUrl = 'https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=';

  public episodesSubjet = new BehaviorSubject<PodcastDetails[] | undefined>([]);

  public selectedEpisode!: string;

  private blueDotSubject = new BehaviorSubject<boolean>(false);
  public readonly blueDot$ = this.blueDotSubject.asObservable();

  constructor(private httpClient: HttpClient, private SpinnerService: SpinnerserviceService) { }

  //Recuperar Todos los Podcast
  getData(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
  }

  getEpisodes(podcastId: string): void {

    this.SpinnerService.showSpinner()
    // console.log('URL API', this.episodesUrl + `${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)

    const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=100`)}`;


    this.httpClient.get<any>(apiUrl).subscribe((data: any) => {
      const parseData = JSON.parse(data.contents).results;
      this.episodesSubjet.next(parseData);
      if (parseData) {
        this.SpinnerService.hideSpinner();
      }
    })
  }

  get episodes(): PodcastDetails[] | undefined {
    return this.episodesSubjet.value;
  }

  saveSelectedEpisode(episodeGuid: string) {
    this.selectedEpisode = episodeGuid;
  }


  showBlueDot() {
    this.blueDotSubject.next(true);
  }

  hideBlueDot() {
    this.blueDotSubject.next(false);
  }

}
