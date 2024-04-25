import { Component, OnInit } from '@angular/core';
import { concatMap } from 'rxjs';
import { NatsUrl } from '../models/natsUrls';
import { Serverz } from '../models/serverz';
import { NatsserverService } from '../services/natsserver.service';

@Component({
  selector: 'app-serverz',
  templateUrl: './serverz.component.html',
  styleUrls: ['./serverz.component.css']
})
export class ServerzComponent implements OnInit {

  natsUrls: NatsUrl[] = [];
  natsUrl: NatsUrl = new NatsUrl();
  serverz: Serverz = new Serverz();
  constructor(private natsService: NatsserverService) {

  }
  ngOnInit(): void {
    this.natsService.getNodes().subscribe(rv => {
      this.natsUrls = rv;
    });
  }

  onChange(selectedItem: any) {
    this.natsService.getServerz(selectedItem.value).subscribe(rv => {
      this.serverz = rv;
    })
  }
}
