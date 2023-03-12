import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Tudo } from 'src/tudo';
import { TudoService } from '../tudo.service';

@Component({
  selector: 'app-tudos',
  templateUrl: './tudos.component.html',
  styleUrls: ['./tudos.component.less']
})
export class TudosComponent implements OnInit{
constructor(private tuduService:TudoService){}

tudos:Tudo[]=[]

username : string = ''

ngOnInit(): void {
  this.tuduService.myTodu.subscribe(value=>{
    this.tudos = [...value]
  })
  this.tuduService.otherTodu.subscribe(value=>{
    this.tudos = [...this.tudos,...value]
  })
}
}
