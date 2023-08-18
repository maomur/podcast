import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { PodcastDetailsComponent } from './components/podcast-details/podcast-details.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RemoveAfter } from './pipes/removeafter.pipe';
import { FormsModule } from '@angular/forms';
import { MilisecondsToMinutesPipe } from './pipes/miliseconds-to-minutes.pipe';
import { CommonModule } from '@angular/common';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { PlayerComponent } from './components/player/player.component';
import { PodcastComponent } from './components/podcast/podcast.component';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    PodcastDetailsComponent,
    RemoveAfter,
    MilisecondsToMinutesPipe,
    EpisodesComponent,
    PlayerComponent,
    PodcastComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
