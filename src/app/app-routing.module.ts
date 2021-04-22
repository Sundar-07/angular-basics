import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmasterComponent } from "./addmaster/addmaster.component";
import { ViewmasterComponent } from "./viewmaster/viewmaster.component";


const routes: Routes = [
  {path:'addmaster',component:AddmasterComponent},
  {path:'viewmaster',component:ViewmasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
