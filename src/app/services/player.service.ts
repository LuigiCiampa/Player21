import { Injectable } from '@angular/core';
import { DemoSong, Song } from '../player/models/song.models';
import { IPlayer } from '../player/models/player.models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private currentSong: Song | undefined ;
  private songs: Song[] = DemoSong;
  player$: any;
  //private gallery$: BehaviorSubject<IGallery>;

  constructor() {

    if (this.songs.length) {
      this.currentSong = this.songs[0];
    }

    this.player$ = new BehaviorSubject({
      currentSong: this.currentSong,
      song: this.songs
    });

  }

  getGallery$():Observable<IPlayer>{
    return this.player$.asObservable();
  }

  next(){
    if(this.songs.length && this.currentSong){
      const lunghezza = this.songs.length;
      const posizione = this.songs.indexOf(this.currentSong);
      const next = posizione < (lunghezza-1) ? posizione+1 : 0;

  



      this.currentSong = this.songs[next];
      this.update();
    }else return;
  }


  prev(){
    if(this.songs.length && this.currentSong){
      const posizione = this.songs.indexOf(this.currentSong);
      const prev = posizione > 0 ? posizione-1 : (this.songs.length-1) ;
     
      this.currentSong = this.songs[prev];
      this.update();
    }else return;
  }

  setPicture(i:number){
    if(i <= (this.songs.length - 1)){
      this.currentSong = this.songs[i];
      this.update();
    }
  }

  private update(){
    this.player$.next({
      currentPicture: this.currentSong,
      pictures: this.songs
    });
  }


}

