import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastDetails } from 'src/app/interfaces/podcast-contents';
import { PodcastsService } from 'src/app/services/podcasts.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit, AfterViewInit {

  public previewUrl!: string;
  public trackName!: string;
  public description!: string;

  constructor(private PodcastService: PodcastsService, private activatedRoute: ActivatedRoute) { }


  ngAfterViewInit(): void {

  }


  ngOnInit() {
    const loadedEpisodedata = this.PodcastService.episodes?.find(episode => {
      return episode.episodeGuid === this.PodcastService.selectedEpisode;
    })

    if (loadedEpisodedata) {
      this.previewUrl = loadedEpisodedata.previewUrl;
      this.trackName = loadedEpisodedata.trackName;
      this.description = loadedEpisodedata.description;
    }
  }

}
