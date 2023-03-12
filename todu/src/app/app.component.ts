import { Component, OnInit } from '@angular/core';
import { TudoService } from './tudo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'todu';

  constructor(private tuduService: TudoService) { }

  isVisible = true;

  usernaem = ''

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.tuduService.changeUserName(this.usernaem)
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  ngOnInit(): void {
    // this.tuduService.username.subscribe(value=>{
    //   console.log(value)
    // })
    
  }
}
