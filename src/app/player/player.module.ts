import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { playerRouting } from './player.routing';
import { PlayerComponent } from './player.component';



@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    playerRouting,

  ]
})
export class PlayerModule {

 }
