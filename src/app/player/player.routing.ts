import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player.component';
import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { PlayerActionsComponent } from './player-actions/player-actions.component';
import { SongImageComponent } from './song-image/song-image.component';
import { SongListComponent } from './song-list/song-list.component';

const playerRoute: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: 'header',
        component: HeaderComponent,
      },
      {
        path: 'player-actions',
        component: PlayerActionsComponent,
      },
      {
        path: 'song-image',
        component: SongImageComponent,
      },
      {
        path: 'song-list',
        component: SongListComponent,
      },
      {
        path: '',
        redirectTo: 'header',
        pathMatch: 'full',
      },
    ],
  },
];

export const playerRouting = RouterModule.forChild(playerRoute);
