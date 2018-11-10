import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

appareilSubject = new Subject<any[]>();
private  appareils=[
    {
    id: 1,
    name: 'Machine à laver',
    status: 'éteint'
    },
    {
    id: 2,
    name: 'Télévision',
    status: 'allumé'
    },
    {
    id: 3,
    name: 'Ordinateur',
    status: 'éteint'
    }
  ]
  constructor() { }

  emitAppareiSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  getAppareilbyId(id: number){
    const appareil = this.appareils.find(
      (appareilObject)=>{
      return  appareilObject.id===id;
      }
    );
    return appareil;
  }
  switchOnAll() {
    for(let appareil of this.appareils){
      appareil.status = 'allumé'
    }
    this.emitAppareiSubject();
  }
  switchOffAll() {
    for(let appareil of this.appareils){
      appareil.status = 'éteint'
    }
    this.emitAppareiSubject();
  }
  switchOnOne(index: number){
    this.appareils[index].status='allumé';
    this.emitAppareiSubject();
  }
  switchOffOne(index: number){
    this.appareils[index].status='éteint';
    this.emitAppareiSubject();
  }
}
