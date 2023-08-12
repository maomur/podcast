import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastsService } from 'src/app/services/podcasts.service';

@Component({
  selector: 'app-podcast-details',
  templateUrl: './podcast-details.component.html',
  styleUrls: ['./podcast-details.component.css']
})
export class PodcastDetailsComponent implements OnInit {

  public podcastDetails: any;

  constructor(private podcastService: PodcastsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const podcastId = params['idPodcast'];
      console.log('PODCAST ID', podcastId)

      this.fetchPodcastDetails(podcastId);
    });
  }

  fetchPodcastDetails(podcastId: string) {
    const apiUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`)}`;


    fetch(apiUrl)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        this.podcastDetails = data.contents;
        console.log(this.podcastDetails)
      })
      .catch(error => console.error('Error:', error));
  }
}
