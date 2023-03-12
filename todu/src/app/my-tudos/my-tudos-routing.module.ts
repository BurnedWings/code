import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTudosComponent } from './my-tudos.component';

const routes: Routes = [{ path: '', component: MyTudosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTudosRoutingModule { }
