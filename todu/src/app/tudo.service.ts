import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tudo } from 'src/tudo';
import { MYTUDOS } from '../mock-tudu'
@Injectable({
  providedIn: 'root'
})
export class TudoService {

  private myToduList = new BehaviorSubject(MYTUDOS)

  private ownTudosList = new BehaviorSubject([])

  private otherToduList = new BehaviorSubject([])

  private userName = new BehaviorSubject('')

  myTodu = this.myToduList.asObservable()

  otherTodu = this.otherToduList.asObservable()

  username = this.userName.asObservable()

  ownTudos = this.ownTudosList.asObservable()

  constructor() { }

  changeMyTudo(tudos: Tudo[]) {
    this.myToduList.next(tudos)
  }

  changeUserName(username: string) {
    this.userName.next(username)
    const list: any = MYTUDOS.filter(item => {
      return item.username === username
    })
    this.ownTudosList.next(list)
    const otherList: any = MYTUDOS.filter(item => {
      return item.username != username
    })
    this.otherToduList.next(otherList)
  }

  deleteTudo(tudos:Tudo[],username:string){
    this.myToduList.next(tudos)
    const list:any = tudos.filter(item=>item.username===username)
    this.ownTudosList.next(list)
  }

  changeTudoStatus(tudos:Tudo[]){
    this.myToduList.next(tudos)
  }


}
