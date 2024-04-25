import { Component, OnInit } from '@angular/core';
import { NatsUrl } from '../models/natsUrls';
import { Websocket } from '../models/websocket';
import { NatsserverService } from '../services/natsserver.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent implements OnInit {
  natsNodes: NatsUrl[] = [];
  natsNode: NatsUrl = new NatsUrl();
  websockests: Websocket[] = [];

  constructor(private natsService: NatsserverService) {
  }

  ngOnInit(): void {
    this.natsService.getWebsocket("").subscribe(rv => {
      this.websockests = rv.connections;
    } );
  }

}
