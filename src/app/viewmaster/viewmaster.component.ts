import { Component, OnInit } from '@angular/core';

import { MasterService } from '../shared/master.service';


@Component({
  selector: 'app-viewmaster',
  templateUrl: './viewmaster.component.html',
  styleUrls: ['./viewmaster.component.css']
})
export class ViewmasterComponent implements OnInit {
  master:any;



  constructor(public service:MasterService) { }

  ngOnInit(){
    
   
  }

}
