import { Component, OnInit } from '@angular/core';
import { PodcastsService } from 'src/app/services/podcasts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public array!: any;
  public filteredArray!: any;
  public countFilteredArray!: number;
  public searchText!: string;

  constructor(private PodcastService: PodcastsService) { }

  ngOnInit(): void {
    this.PodcastService.getData().subscribe(
      data => {
        this.array = data.feed.entry;
        this.filteredArray = this.array;
        this.updateFilteredItems()
      },
      error => {
        console.error('Error en obtener los datos', error)
      }
    )
  }

  updateFilteredItems(): void {

    if (!this.searchText) {
      this.filteredArray = this.array;
    } else {
      this.filteredArray = this.array.filter((item: { title: { label: string; }; }) =>
        item.title && item.title.label &&
        item.title.label.toLowerCase().includes(this.searchText.toLowerCase())
      );
      this.countFilteredArray = this.filteredArray.length;
    }
  }





}
