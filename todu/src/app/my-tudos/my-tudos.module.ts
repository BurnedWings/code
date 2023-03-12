import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTudosRoutingModule } from './my-tudos-routing.module';
import { MyTudosComponent } from './my-tudos.component';
import { ShareModuleModule } from '../share-module/share-module.module';


@NgModule({
  declarations: [
    MyTudosComponent,
  ],
  imports: [
    CommonModule,
    MyTudosRoutingModule,
    ShareModuleModule
  ]
})
export class MyTudosModule { }
