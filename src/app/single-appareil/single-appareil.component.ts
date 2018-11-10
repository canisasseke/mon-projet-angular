import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {


  name: string;
  status: string;
  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id =this.route.snapshot.params['id'];
    this.name=this.appareilService.getAppareilbyId(+id).name;
    this.status=this.appareilService.getAppareilbyId(+id).status
  }

}
