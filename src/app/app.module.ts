import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { PodcastDetailsComponent } from './components/podcast-details/podcast-details.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component'
import { HttpClientModule } from '@angular/common/http';
import { RemoveAfter } from './pipes/removeafter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    PodcastDetailsComponent,
    EpisodeDetailsComponent,
    RemoveAfter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
