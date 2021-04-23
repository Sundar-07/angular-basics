import { Component, OnInit } from '@angular/core';
import { MasterService } from '../shared/master.service';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-addmaster',
  templateUrl: './addmaster.component.html',
  styleUrls: ['./addmaster.component.css']
})

export class AddmasterComponent implements OnInit {
  title="Hello";
master:string;
mname: string;
mcount: string;
mtype: string;
uoml:string;
uom:string;
procl:string;
procv:string;
cost:string;
lcost:string;
message:string;

onSubmit(){
  let Record = {};

  Record['materialname']    = this.mname;
  Record['materialcount']   = this.mcount;
  Record['materialtype']    = this.mtype;
  Record['uomlabel']        = this.uoml;
  Record['uom']             = this.uom;
  Record['procurelocation'] = this.procl;
  Record['procurevendor']   = this.procv;
  Record['procurecost']     = this.cost;
  Record['logisticscost']   = this.lcost;

  this.service.create_master(Record).then(res=>{
    this.mname = "";
    this.mcount = "";
    this.mtype = "";
    this.uoml = "";
    this.uom = "";
    this.procl = "";
    this.procv = "";
    this.cost = "";
    this.lcost = "";
    console.log(res);
    this.message="Submitted master data form";

  }).catch(error=>{
    console.log(error);
  })
  

}

 
  constructor(public service: MasterService) { }

 
  ngOnInit(): void {
   
  }

}
