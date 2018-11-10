import { Injectable } from '@angular/core';
import {User}  from "../models/user";
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[]=[
    {
      lastName: 'ASSEKE',
      firstName: 'canis',
      email: 'canis@gmail.com',
      drinkPreference: 'coca',
      hobbies:['coder','deguster le café']
    }
  ];
  userSubject = new Subject<User[]>();
  constructor() { }


  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  saveUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

}
