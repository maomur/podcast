import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { PodcastDetailsComponent } from './components/podcast-details/podcast-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RemoveAfter } from './pipes/removeafter.pipe';
import { FormsModule } from '@angular/forms';
import { MilisecondsToMinutesPipe } from './pipes/miliseconds-to-minutes.pipe';
import { CommonModule } from '@angular/common';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { PlayerComponent } from './components/player/player.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
