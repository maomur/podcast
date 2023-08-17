import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { PodcastDetails } from 'src/app/interfaces/podcast-contents';
import { PodcastsService } from 'src/app/services/podcasts.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnChanges {

  @Input() public podcastDetails: PodcastDetails[] = [];
  @Output() public showEpisodes = new EventEmitter<boolean>();

  constructor(private PodcastSerevice: PodcastsService) { }

  ngOnChanges(changes: any) {
    console.log('CHANGES', changes)
  }

  onSelectEpisodes(podcast: PodcastDetails) {
    console.log(podcast)
    this.showEpisodes.emit(false);
    this.PodcastSerevice.saveSelectedEpisode(podcast.episodeGuid)
  }

}
