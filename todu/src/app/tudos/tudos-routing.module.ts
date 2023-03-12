import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TudosComponent } from './tudos.component';

const routes: Routes = [{ path: '', component: TudosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TudosRoutingModule { }
