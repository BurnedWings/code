import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'tudos', loadChildren: () => import('./tudos/tudos.module').then(m => m.TudosModule) },
  { path: 'myTudos', loadChildren: () => import('./my-tudos/my-tudos.module').then(m => m.MyTudosModule) },
  { path: 'otherTudos', loadChildren: () => import('./other-tudos/other-tudos.module').then(m => m.OtherTudosModule) },
  { path: '',   redirectTo: '/tudos', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
