import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() indexofAppareil: number;
  @Input() appareilId: number;

  textvalue: string;
  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }
  getAppareilStatus(){
    return this.appareilStatus;
  }
  getColor(){
    return this.appareilStatus==='éteint'? 'red':'green';
  }

  onAllumer(){
    console.log('on allume un')
    this.appareilService.switchOnOne(this.indexofAppareil);
  }
  onEteindre(){
    console.log('on éteint un')
    this.appareilService.switchOffOne(this.indexofAppareil);
  }
}
