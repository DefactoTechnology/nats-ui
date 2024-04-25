import { Component, OnInit } from '@angular/core';
import { concatMap } from 'rxjs';
import { NatsUrl } from '../models/natsUrls';
import { NamedStorezChannel, Storez } from '../models/storez';
import { NatsserverService } from '../services/natsserver.service';

@Component({
  selector: 'app-storez',
  templateUrl: './storez.component.html',
  styleUrls: ['./storez.component.css']
})
export class StorezComponent implements OnInit {

  natsUrls: NatsUrl[] = [];
  natsUrl: NatsUrl = new NatsUrl();
  storez: Storez = new Storez();
  namedStorezChannels?: NamedStorezChannel[] = [];
  constructor(private natsService: NatsserverService) {

  }

  ngOnInit(): void {
    this.natsService.getNodes().subscribe(rv => {
      this.natsUrls = rv;
    });
  }

  onChange(selectedItem: any) {
    this.natsService.getStorez(selectedItem.value).subscribe(rv => {
      this.storez = rv;
      if (this.storez.limits.channels == null){
        this.namedStorezChannels = undefined;
      }
      else{
        this.namedStorezChannels = Object.keys(rv.limits.channels).map((key) => ({
          name: key,
          namedChannel: rv.limits.channels[key],
        }));
      }
      localStorage.setItem("selectNode", this.natsUrl.text)
    });
  }
  
}
