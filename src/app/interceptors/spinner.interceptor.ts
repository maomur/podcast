import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerserviceService } from '../services/spinnerservice.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private SpinnerService: SpinnerserviceService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.SpinnerService.showSpinner();
    return next.handle(request).pipe(
      finalize(() => {
      })
    );
  }
}
