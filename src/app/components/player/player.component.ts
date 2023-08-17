import { Component, Input, OnInit } from '@angular/core';
import { PodcastDetails } from 'src/app/interfaces/podcast-contents';
import { PodcastsService } from 'src/app/services/podcasts.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  public previewUrl!: string;
  public trackName!: string;
  public description!: string;

  ngOnInit() {
    const currentEpisodeData = this.PodcastService.episodes?.find(episode => {
      return episode.episodeGuid === this.PodcastService.selectedEpisode;
    })
    console.log('CURRENT', currentEpisodeData)

    if (currentEpisodeData) {
      this.previewUrl = currentEpisodeData.previewUrl;
      this.trackName = currentEpisodeData.trackName;
      this.description = currentEpisodeData.description;
    }


  }


  constructor(private PodcastService: PodcastsService) { }


}
