import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player.component';
import { HeaderComponent } from './header/header.component';
import { PlayerActionsComponent } from './player-actions/player-actions.component';
import { SongImageComponent } from './song-image/song-image.component';
import { SongListComponent } from './song-list/song-list.component';

const playerRoute: Routes = [
  {
    path: '',
    component: PlayerComponent
  },
];

export const playerRouting = RouterModule.forChild(playerRoute);
