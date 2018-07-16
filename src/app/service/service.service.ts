import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { ApiConfig} from '../shared/api.config';
import { Channel} from '../shared/channel.model';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Service {
  webapiurl:string
  headers = new Headers();

  constructor(private http: HttpClient) {
    this.webapiurl = ApiConfig.API_ENDPOINT;
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Cache-Control', 'max-age=0');
    this.headers.append('Accept', 'application/json');
  }
 
  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(this.webapiurl+'GetChannels');
  }
}
