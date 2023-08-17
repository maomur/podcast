import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { PodcastDetailsComponent } from './components/podcast-details/podcast-details.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { PlayerComponent } from './components/player/player.component';

const routes: Routes = [
  { path: "", component: ListComponent },
  {
    path: "podcast/:idPodcast", component: PodcastDetailsComponent, children: [
      {
        path: "episode/:idEpisode", component: PlayerComponent //podcast/1574029840/episode/f2a046cf-140b-4613-acd3-b04d01685508
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
