import { Component, OnInit } from '@angular/core';
import { Master } from "../shared/master";
import { MasterService } from '../shared/master.service';


@Component({
  selector: 'app-addmaster',
  templateUrl: './addmaster.component.html',
  styleUrls: ['./addmaster.component.css']
})
export class AddmasterComponent implements OnInit {

  materialModel = new Master('Cement',1,'Bag','Ton',1,'Bangalore','Sathya & Co',4000,1500);
  
  onSubmit(){
    this._masterService.addmaster(this.materialModel).subscribe(
      data=>console.log("Success",data),
      error=>console.log("Error",error)
    )
  }

  constructor(private _masterService: MasterService) 
    { }

 

  ngOnInit(): void {
   
  }

}
