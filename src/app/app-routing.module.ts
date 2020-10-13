import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from './contact/contact.component'
import {MusicPlayerComponent} from './music-player/music-player.component'

const routes: Routes = [
  {path: "", component:MusicPlayerComponent},
  {path: "contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
