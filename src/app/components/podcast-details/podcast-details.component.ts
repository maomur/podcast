import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastContents, PodcastDetails } from 'src/app/interfaces/podcast-contents';
import { PodcastsService } from 'src/app/services/podcasts.service';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['./podcast-details.component.css']
})
export class PodcastDetailsComponent implements OnInit {

  public podcastDetails: PodcastDetails[] = [];
  public podcasts: any;
  public filteredPodcasts: any;
  public trackName!: string;
  public artistName!: string;
  public artwork!: string;
  public collectionName!: string;
  public summary!: string;
  public previewUrl!: string;
  public showEpisodes: boolean = true;


  constructor(private PodcastService: PodcastsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      const podcastId = params['idPodcast'];

      this.PodcastService.getEpisodes(podcastId);

      this.PodcastService.episodesSubjet.subscribe(data => {

        if (data) {
          this.podcastDetails = data;
          this.artwork = this.podcastDetails[0].artworkUrl600;
          this.previewUrl = this.podcastDetails[1].previewUrl;
        }

      })


      // this.fetchPodcastDetails(podcastId);

      this.PodcastService.getData().subscribe(
        data => {
          this.podcasts = data.feed.entry.find((artist: any) => {
            return podcastId === artist.id.attributes['im:id'];
          })
          console.log('PRIMER OBJETO:', this.podcasts)
          this.summary = this.podcasts.summary.label;
          this.artistName = this.podcasts['im:artist'].label;
          this.collectionName = this.podcasts.title.label;
        }
      )
    })
  }

  // fetchPodcastDetails(podcastId: string) {
  // const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)}`;


  //   fetch(apiUrl)
  //     .then(response => {
  //       if (response.ok) return response.json();
  //       throw new Error('Network response was not ok.');
  //     })
  //     .then(data => {
  //       console.log('SEGUNDO OBJETO', JSON.parse(data.contents));

  //       let podcasts: PodcastDetails[] = JSON.parse(data.contents).results;
  //       this.podcastDetails = podcasts;
  //       this.artwork = this.podcastDetails[0].artworkUrl600;
  //       this.previewUrl = this.podcastDetails[1].previewUrl;
  //       console.log(this.previewUrl)
  //     })
  //     .catch(error => console.error('Error:', error));
  // }

  hideEpisodes(showEpisodes: boolean) {
    this.showEpisodes = showEpisodes;
  }



}
