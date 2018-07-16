import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http'
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChannelComponent } from './channel.component/channel.component';

import { Routing} from '../app/routing/app.route';


@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
