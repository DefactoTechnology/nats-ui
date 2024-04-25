import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './channelsz/channelsz.component';
import { HttpClient, HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';

import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {SplitButtonModule} from 'primeng/splitbutton';
import {DialogModule} from 'primeng/dialog';
import {PanelModule} from 'primeng/panel';
import {ProgressBarModule} from 'primeng/progressbar';
import {TableModule} from 'primeng/table';
import {DividerModule} from 'primeng/divider';
import {TooltipModule} from 'primeng/tooltip';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MenubarModule} from 'primeng/menubar';
import {BadgeModule} from 'primeng/badge';
import {TagModule } from 'primeng/tag';

import { ServerzComponent } from './serverz/serverz.component';
import { StorezComponent } from './storez/storez.component';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { WebsocketComponent } from './websocket/websocket.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ServerzComponent,
    StorezComponent,
    WebsocketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: "en"
    }),

    InputTextModule,
    ListboxModule,
    DropdownModule,
    CardModule,
    SplitButtonModule,
    DialogModule,
    PanelModule,
    ProgressBarModule,
    TableModule,
    DividerModule,
    TooltipModule,
    MessagesModule,
    MessageModule,
    MenubarModule,
    BadgeModule,
    TagModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
