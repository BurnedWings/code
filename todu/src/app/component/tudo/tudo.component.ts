import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TudoService } from 'src/app/tudo.service';
import { Tudo } from 'src/tudo';
export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
  disabled: boolean;
}
@Component({
  selector: 'app-tudo',
  templateUrl: './tudo.component.html',
  styleUrls: ['./tudo.component.less']
})
export class TudoComponent {

  @Input() tudos !: Tudo[]

  @Output() changeTudo = new EventEmitter()

  constructor(private tudosService: TudoService) { }

  username: string = ''

  onItemChecked = (status: boolean, id: number) => {
    const list = this.tudos.map(item => {
      if (item.id === id) {
        item.isFinish = status
      }
      return item
    })
    this.tudosService.changeTudoStatus(list)
  }

  clickChecked = ($event: any) => {
    $event.stopPropagation()
  }

  onAllChecked = () => { }

  onCurrentPageDataChange = (listOfCurrentPageData: readonly Tudo[]) => {
    this.listOfCurrentPageData = listOfCurrentPageData
  }

  saveTheTudo = () => {

  }

  ngOnInit(): void {
    this.tudosService.username.subscribe(value => {
      this.username = value
    })
  }

  listOfCurrentPageData: readonly Tudo[] = [];

  isVisible = false;

  targetTudo: Tudo = {
    title: '',
    username: '',
    createTime: new Date(),
    isFinish: false,
    id: 0,
    level: 0
  }

  addLeave = () => {
    this.targetTudo.level+=1
  }

  minusLeave = () => {
    this.targetTudo.level>0?this.targetTudo.level-=1:this.targetTudo.level=0
  }

  showModal(data: Tudo): void {
    this.targetTudo = { ...data }
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    // this.changeTudo.emit()
    const list = this.tudos.filter(item => {
      return item.id != this.targetTudo.id
    })
    this.tudosService.deleteTudo(list, this.username)
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
