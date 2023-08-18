import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PodcastsService } from 'src/app/services/podcasts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public viewLoaded: boolean = false;

  constructor(private PodcastService: PodcastsService) { }
  ngAfterViewInit(): void {
    this.viewLoaded = false;
  }

  ngOnInit(): void {
    this.PodcastService.blueDot$.subscribe((showBlueDot) => {
      this.viewLoaded = showBlueDot;
    })
  }



}
