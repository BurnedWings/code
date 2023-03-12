import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TudoComponent } from '../component/tudo/tudo.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [
    TudoComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzModalModule,
    NzButtonModule,
    FormsModule,
    NzInputModule,
    NzIconModule
  ],
  exports:[
    TudoComponent
  ]
})
export class ShareModuleModule { }
