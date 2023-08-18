import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastDetails } from 'src/app/interfaces/podcast-contents';
import { PodcastsService } from 'src/app/services/podcasts.service';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['./podcast-details.component.css']
})
export class PodcastDetailsComponent implements OnInit, AfterViewInit {

  public podcastDetails: PodcastDetails[] = [];
  public podcasts: any;
  public filteredPodcasts: any;
  public trackName!: string;
  public artistName!: string;
  public artwork: string = "";
  public collectionName!: string;
  public summary!: string;
  public previewUrl!: string;
  public showEpisodes: boolean = true;


  constructor(private PodcastService: PodcastsService, private activatedRoute: ActivatedRoute) { }

  ngAfterViewInit(): void {
    this.PodcastService.showBlueDot();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const podcastId = this.activatedRoute.firstChild?.snapshot.params['idPodcast']
      this.PodcastService.getEpisodes(podcastId);
      this.PodcastService.episodesSubjet.subscribe(data => {
        //If data comes from the http it means it has a length
        //Otherwhise its the default next from my subject
        if (data?.length) {
          this.podcastDetails = data;
          this.artwork = this.podcastDetails[0].artworkUrl600;
          this.previewUrl = this.podcastDetails[1].previewUrl;
        }
      })

      this.PodcastService.getData().subscribe(
        data => {
          this.podcasts = data.feed.entry.find((artist: any) => {
            return podcastId === artist.id.attributes['im:id'];
          })
          this.summary = this.podcasts.summary.label;
          this.artistName = this.podcasts['im:artist'].label;
          this.collectionName = this.podcasts.title.label;
        }
      )
    })
  }

  hideEpisodes(showEpisodes: boolean) {
    this.showEpisodes = showEpisodes;
  }

}
