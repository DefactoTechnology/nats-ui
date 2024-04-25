import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelComponent } from './channelsz/channelsz.component';

import { ServerzComponent } from './serverz/serverz.component';
import { StorezComponent } from './storez/storez.component';
import { WebsocketComponent } from './websocket/websocket.component';

const routes: Routes = [
  {path:'channelz',component:ChannelComponent},
  {path:'',component:ChannelComponent},
  {path:'serverz',component:ServerzComponent},
  {path:'storez',component:StorezComponent},
  {path:'websocket',component:WebsocketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
