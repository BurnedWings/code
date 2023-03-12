import { Component, OnInit } from '@angular/core';
import { Tudo } from 'src/tudo';
import { TudoService } from '../tudo.service';

@Component({
  selector: 'app-other-tudos',
  templateUrl: './other-tudos.component.html',
  styleUrls: ['./other-tudos.component.less']
})
export class OtherTudosComponent implements OnInit {
  constructor(private tudoService: TudoService) { }

  tudos: Tudo[] = []
  ngOnInit(): void {
    this.tudoService.otherTodu.subscribe(value=>{
      this.tudos = [...value]
    })
  }
}
