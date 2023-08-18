import { Component } from '@angular/core';
import { SpinnerserviceService } from './services/spinnerservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Podcast Test';

  public isLoading: boolean = false;

  constructor() {

  }


}
