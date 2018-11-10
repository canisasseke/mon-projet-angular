import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  lastUpdate = new Date();
  asyncDate = new Promise((resolve,reject) =>{
    const date =new Date();
    setTimeout(()=>{
      resolve(date);
    }
      ,2000
    )
  });

  appareils: any[];
  appareilSubscription: Subscription;
  isAuth=false;

  constructor(private appareilService: AppareilService){
    setTimeout(()=>{
      this.isAuth=true;
    }
      ,2000
    );
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[])=>{
        this.appareils=appareils;
      }
    );
    this.appareilService.emitAppareiSubject();
  }
  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }
  onAllumerTout(){
    console.log("on allume tout")
    this.appareilService.switchOnAll();
  }
  onEteintTout(){
    console.log("on éteint tout")
    this.appareilService.switchOffAll();
  }
}
