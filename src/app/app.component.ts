import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { MenuItem } from 'primeng/api';
import { NatsserverService } from './services/natsserver.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  env?: string;
  topicName?: string;
  constructor(private route: ActivatedRoute, private natsService: NatsserverService) {
    this.env = this.route.snapshot.params['env'];
    this.topicName = this.route.snapshot.params['tn'];
  }
  title = 'nats-ui';
  items: MenuItem[] = [];
  ngOnInit(): void {

    let itemData = [
      {
        label: 'Serverz',
        icon: 'fa-solid fa-server',
        routerLink: '/serverz'
      },
      {
        label: 'Chanelsz',
        icon: 'fa-brands fa-hubspot',
        routerLink: '/channelz'
      },
      {
        label: 'Storez',
        icon: 'fa-solid fa-database',
        routerLink: '/storez'
      },
      {
        label: 'Websocket',
        icon: 'fa-solid fa-circle-nodes',
        routerLink: '/websocket'
      }
    ]
    this.items=itemData;
  }
}
