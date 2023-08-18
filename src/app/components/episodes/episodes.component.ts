import { Component, EventEmitter, OnInit, Output, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PodcastDetails } from 'src/app/interfaces/podcast-contents';
import { PodcastsService } from 'src/app/services/podcasts.service';
import { SpinnerserviceService } from 'src/app/services/spinnerservice.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit, AfterViewInit {

  public isLoading: boolean = false;


  public podcastDetails: PodcastDetails[] = [];
  @Output() public showEpisodes = new EventEmitter<boolean>();

  constructor(private PodcastSerevice: PodcastsService, private SpinnerService: SpinnerserviceService, private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.PodcastSerevice.episodesSubjet.subscribe((data) => {
      if (data) {
        this.podcastDetails = data;
      }
    })
  }

  ngAfterViewInit(): void {
    this.SpinnerService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
      this.cdr.detectChanges();
    })
  }

  onSelectEpisodes(podcast: PodcastDetails) {
    this.showEpisodes.emit(false);
    this.PodcastSerevice.saveSelectedEpisode(podcast.episodeGuid)
  }


}
