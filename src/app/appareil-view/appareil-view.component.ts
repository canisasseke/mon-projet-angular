import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
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
  isAuth=false;

  constructor(private appareilService: AppareilService){
    setTimeout(()=>{
      this.isAuth=true;
    }
      ,2000
    );
  }

  ngOnInit() {
    this.appareils=this.appareilService.appareils;
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
