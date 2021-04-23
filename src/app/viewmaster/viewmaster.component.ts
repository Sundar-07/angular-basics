import { Component, OnInit } from '@angular/core';
import { MasterService } from '../shared/master.service';


@Component({
  selector: 'app-viewmaster',
  templateUrl: './viewmaster.component.html',
  styleUrls: ['./viewmaster.component.css']
})
export class ViewmasterComponent implements OnInit {
  master:string;

  constructor(public service:MasterService) { }

  ngOnInit(): void {
    this.service.get_master().subscribe(data=>{
      this.master = data.map(e=>{
        return{
          id:e.payload.doc.id,
          mname:e.payload.doc.data()['materialname'],
          mcount:e.payload.doc.data()['materialcount'],
          mtype:e.payload.doc.data()['materialtype'],
          uoml:e.payload.doc.data()['uomlabel'],
          uom:e.payload.doc.data()['uom'],
          procl:e.payload.doc.data()['procurelocation'],
          procv:e.payload.doc.data()['procurevendor'],
          cost:e.payload.doc.data()['procurecost'],
          lcost:e.payload.doc.data()['logisticscost'],
        };
      })
      console.log(this.master);
    })
  }

}
