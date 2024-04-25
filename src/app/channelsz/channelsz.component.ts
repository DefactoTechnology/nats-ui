import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Channel } from '../models/channel';
import { Channelz } from '../models/channelz';
import { NatsUrl } from '../models/natsUrls';
import { NatsserverService } from '../services/natsserver.service';
import { concatMap } from 'rxjs/operators';
import { NamedStorezChannel, Storez } from '../models/storez';

@Component({
  selector: 'app-channel',
  templateUrl: './channelsz.component.html',
  styleUrls: ['./channelsz.component.css']
})
export class ChannelComponent implements OnInit {

  Object = Object;
  natsUrls: NatsUrl[] = [];
  natsUrl: NatsUrl = new NatsUrl();
  channelz: Channelz = new Channelz();
  storez: Storez = new Storez();
  namedStorezChannels?: NamedStorezChannel[] = [];
  selectedChannel: Channel = new Channel();
  alertMsg: string = '';
  items!: MenuItem[];
  display: boolean = false;
  interval: any;
  secondPeriod: number = 3;
  maxPendingCount: number = 3;
  timerStopVisible: boolean = false;
  values = [];

  constructor(private natsService: NatsserverService) { }

  ngOnInit(): void {
    this.natsService.getNodes().subscribe(rv => {
      this.natsUrls = rv;
    });
    
    this.items = [
      {
        label: 'Setting',
        icon: 'pi pi-cog',
        command: () => {
          this.showDialog();
        },
      },
    ];

    if (localStorage.getItem('secondPeriod') == undefined || localStorage.getItem('secondPeriod') == undefined) {
      localStorage.setItem('secondPeriod', '3'); //3sec
      localStorage.setItem('maxPendingCount', '3'); //3sec
      this.secondPeriod = 3;
      this.maxPendingCount = 3;
    } else {
      this.secondPeriod = Number(localStorage.getItem('secondPeriod'));
      this.maxPendingCount = Number(localStorage.getItem('maxPendingCount'));
    }
  }

  urlChange(selectedItem: any) {
     
    localStorage.setItem("selectNode", selectedItem.value.text)
    this.natsService.getChannelsz(selectedItem.value).subscribe(
      (rv) => {
        this.channelz = rv;
        for (const element of this.channelz.channels) {
          const chnl = element;
          chnl.desc = chnl.name;
        }
      },
      (err) => {
        alert(err.message);
      }
    );

    this.natsService.getStorez(selectedItem.value).subscribe(
      (rv) => {
        this.storez = rv;
        if (this.storez.limits.channels == null) {
          this.namedStorezChannels = undefined;
        }
        else {
          this.namedStorezChannels = Object.keys(rv.limits.channels).map((key) => ({
            name: key,
            namedChannel: rv.limits.channels[key],
          }));
        }
      },
      (err) => {
        alert(err.message);
      });
  }

  onChangeChannel(data: any) {
    localStorage.setItem('selectedChannel', data.value.name);
  }

  getNatsData(env: any, channelName: string) {
    this.natsService.getChannelz(env, channelName).subscribe(
      (rv) => {
        this.selectedChannel = rv;
        this.selectedChannel.desc = this.selectedChannel.name
        let pendingCount = this.selectedChannel?.subscriptions[0].pending_count as number;

        if (pendingCount >= this.maxPendingCount) {
          this.alertMsg = 'Warning! max pending count';
        } else {
          this.alertMsg = '';
        }
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  getStorezData() {

  }

  startTimer() {
    let secondPeriod = Number(localStorage.getItem('secondPeriod')?.toString()) * 1000;
    let setTime = 1000;
    this.timerStopVisible = true;
    this.interval = setInterval(() => {
      if (setTime > 0) {
        setTime--;
        this.getNatsData(this.natsUrl, this.selectedChannel.name);
        // this.selectedChannel = <Channel>(this.channelz.channels.find((x) => x.name == localStorage.getItem('selectedChannel')));
      } else {
        clearInterval(this.interval);
        this.timerStopVisible = false;
      }
    }, secondPeriod);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.timerStopVisible = false;
    this.alertMsg = '';
  }

  setTimer(count: number, maxPendingCount: number) {
    if (count >= 3) {
      localStorage.setItem('secondPeriod', count.toString());
      localStorage.setItem('maxPendingCount', maxPendingCount.toString());
      this.display = false;
    } else {
      alert('Warning! min>2');
    }
  }

  showDialog() {
    this.display = true;
  }

  changeSelections(data: any) {
    this.natsUrl = { text: data.text, url: data.url };

  }

  IsChannelConfigured(channelName: string) {
    if (this.namedStorezChannels == undefined) {
      return false;
    }
    else {
      return this.namedStorezChannels.find(x => x.name == channelName) != undefined;
    }
  }

  getStorezChannelByChannelName(channelName: string) {
    return this.namedStorezChannels?.find(x => x.name == channelName);
  }
}
