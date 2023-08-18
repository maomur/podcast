import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PodcastDetails } from 'src/app/interfaces/podcast-contents';
import { PodcastsService } from 'src/app/services/podcasts.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  public podcastDetails: PodcastDetails[] = [];
  @Output() public showEpisodes = new EventEmitter<boolean>();

  constructor(private PodcastSerevice: PodcastsService) { }

  ngOnInit(): void {
    this.PodcastSerevice.episodesSubjet.subscribe((data) => {
      if (data) {
        this.podcastDetails = data;
      }
    })
  }

  onSelectEpisodes(podcast: PodcastDetails) {
    this.showEpisodes.emit(false);
    this.PodcastSerevice.saveSelectedEpisode(podcast.episodeGuid)
  }


}
