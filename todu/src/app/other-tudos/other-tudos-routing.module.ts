import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherTudosComponent } from './other-tudos.component';

const routes: Routes = [{ path: '', component: OtherTudosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherTudosRoutingModule { }
