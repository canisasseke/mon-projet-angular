import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;

  textvalue: string;
  constructor() { }

  ngOnInit() {
  }
  getAppareilStatus(){
    return this.appareilStatus;
  }
  getColor(){
    return this.appareilStatus==='éteint'? 'red':'green';
  }

}
