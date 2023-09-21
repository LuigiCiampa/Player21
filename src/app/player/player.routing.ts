import { RouterModule, Routes } from "@angular/router";
import { PlayerComponent } from "./player.component";

 const playerRoute: Routes = [
    {
      path:'',
      component: PlayerComponent
    }
  ];
  
  export const playerRouting = RouterModule.forChild(playerRoute);