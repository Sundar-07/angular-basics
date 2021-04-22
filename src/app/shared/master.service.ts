import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Master } from './master';

@Injectable({
  providedIn: 'root'
})

export class MasterService {
 
  _url='http://localhost:3000/addmaster'; 
  constructor(private _http: HttpClient) { }

  addmaster(master: Master){
    return this._http.post<any>(this._url,master);
  }

}