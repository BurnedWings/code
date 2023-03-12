import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherTudosRoutingModule } from './other-tudos-routing.module';
import { OtherTudosComponent } from './other-tudos.component';
import { ShareModuleModule } from '../share-module/share-module.module';


@NgModule({
  declarations: [
    OtherTudosComponent
  ],
  imports: [
    CommonModule,
    OtherTudosRoutingModule,
    ShareModuleModule
  ]
})
export class OtherTudosModule { }
