import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { playerRouting } from './player.routing';
import { PlayerComponent } from './player.component';
import { HeaderComponent } from './header/header.component';
import { PlayerActionsComponent } from './player-actions/player-actions.component';
import { SongImageComponent } from './song-image/song-image.component';
import { SongListComponent } from './song-list/song-list.component';



@NgModule({
  declarations: [PlayerComponent,
  HeaderComponent,PlayerActionsComponent,SongImageComponent,SongListComponent],
  imports: [
    CommonModule,
    playerRouting,

  ]
})
export class PlayerModule {

 }
