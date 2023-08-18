import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PodcastDetailsComponent } from './components/podcast-details/podcast-details.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { PlayerComponent } from './components/player/player.component';
import { PodcastComponent } from './components/podcast/podcast.component';

const routes: Routes = [
  { path: "", component: ListComponent },
  {
    path: 'podcast', component: PodcastComponent, children: [
      { path: ":idPodcast", component: EpisodesComponent },
      { path: ":idPodcast/episode/:idEpisode", component: PlayerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
