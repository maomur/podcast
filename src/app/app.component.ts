import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Podcast Test';

  public isLoading: boolean = false;

  constructor() {
    if (environment.production) {
      console.log('ESTÁS EN PRODUCCIÓN')
    } else {
      console.log('ESTÁS EN MODO DESARROLLO')
    }
  }


}
