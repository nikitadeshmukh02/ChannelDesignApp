import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import { Channel} from '../shared/channel.model';
 
@Component({
  selector: 'app-channel.component',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  channelData=[];
  private subscription;
  constructor(private objService :Service) { }
  
  ngOnInit() {
    this.subscription =  this.objService.getChannels()
    .subscribe((data) =>  {
      let evaluateArray:Channel[]=[];
       data.map((items,bdate) =>  {
        items.date=moment(items.time).format('dddd, MMMM Do, YYYY');
        items.time=moment(items.time).format('hh:mm:ss a');
        evaluateArray.push(items)
      });
      this.channelData =  _(evaluateArray)
    .groupBy('date')
    .map( (items,vdate) =>  {
      return {
        headerdate:vdate,
        items: _.map(_.sortBy(items , 'time')
      )
      };
    }).orderBy('time').value();

 
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
