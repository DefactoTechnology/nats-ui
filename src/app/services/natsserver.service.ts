import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Channel } from '../models/channel';
import { Channelz } from '../models/channelz';
import { NatsUrl } from '../models/natsUrls';
import { Serverz } from '../models/serverz';
import { Storez } from '../models/storez';
import { Websocket } from '../models/websocket';

@Injectable({
  providedIn: 'root'
})
export class NatsserverService {
  
  constructor(public http:HttpClient) { 

  }

  getChannelsz(env:any):Observable<any>{
    return this.http.jsonp(env.url+"/channelsz?subs=1","callback")
  }

  getChannelz(env:any,tn:string):Observable<any>{
    return this.http.jsonp(`${env.url}/channelsz?channel=${tn}&subs=1`,"callback")
  }

  getNodes():Observable<any>{
    return this.http.get<NatsUrl[]>("./assets/urls.json")
  }

  getServerz(env:any):Observable<any>{
    return this.http.jsonp(env.url+"/serverz","callback")
  }
  
  getStorez(env:any):Observable<any>{
    return this.http.jsonp(env.url+"/storez","callback")
  }

  getWebsocket(env:any):Observable<any>{
    return this.http.jsonp("http://localhost:8222/connz","callback")
  }

}
