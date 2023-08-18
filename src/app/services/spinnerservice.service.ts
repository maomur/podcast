import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerserviceService {

  private isLoading = new BehaviorSubject<boolean>(false);
  public readonly isLoading$ = this.isLoading.asObservable();

  constructor() { }

  showSpinner() {
    this.isLoading.next(true);
  }

  hideSpinner() {
    this.isLoading.next(false);
  }
}
