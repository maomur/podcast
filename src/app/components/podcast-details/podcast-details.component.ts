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

  public podcastDetails!: PodcastDetails[];
  public podcasts: any;
  public filteredPodcasts: any;
  public trackName!: string;
  public artistName!: string;
  public image!: string;
  public collectionName!: string;
  public summary!: string;


  constructor(private PodcastService: PodcastsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      const podcastId = params['idPodcast'];
      console.log('PODCAST ID:', podcastId)
      this.fetchPodcastDetails(podcastId);

      this.PodcastService.getData().subscribe(
        data => {
          this.podcasts = data.feed.entry.find((artist: any) => {
            return podcastId === artist.id.attributes['im:id'];
          })
          console.log('PRIMER OBJETO:', this.podcasts)
          console.log('SUMARY:', this.podcasts.summary.label)
          this.summary = this.podcasts.summary.label;
          this.image = this.podcasts['im:image'][2].label;
        }
      )
    })
  }

  fetchPodcastDetails(podcastId: string) {
    const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)}`;


    fetch(apiUrl)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log(JSON.parse(data.contents));

        let podcasts: PodcastDetails[] = JSON.parse(data.contents).results;
        this.podcastDetails = podcasts

      })
      .catch(error => console.error('Error:', error));


  }



}
