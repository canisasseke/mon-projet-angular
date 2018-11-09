import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

appareils: any[]=[
  {
  name: 'Machine à laver',
  status: 'éteint'
  },
  {
  name: 'Télévision',
  status: 'allumé'
  },
  {
  name: 'Ordinateur',
  status: 'éteint'
  }
]
isAuth=false;
constructor(){
  setTimeout(()=>{
    this.isAuth=true;
  }
    ,2000
  );
}
onAllumerTout(){
  console.log("on allume tout")
}
onEteintTout(){
  console.log("on éteint tout")
}
}
