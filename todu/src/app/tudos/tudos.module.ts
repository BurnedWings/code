import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TudosRoutingModule } from './tudos-routing.module';
import { TudosComponent } from './tudos.component';
import { TudoComponent } from '../component/tudo/tudo.component';
import { ShareModuleModule } from '../share-module/share-module.module';
// import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    TudosComponent,
  ],
  imports: [
    CommonModule,
    TudosRoutingModule,
    ShareModuleModule
  ]
})
export class TudosModule { }
