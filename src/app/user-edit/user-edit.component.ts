import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {


  userForm: FormGroup;
  constructor(private userService: UserService, private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
  this.userForm=this.formBuilder.group({
      lastName: ['',Validators.required],
      firstName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      drinkPreference: ['',Validators.required],
      hobbies: this.formBuilder.array([])
    });
  }
  onSubmit() {
    const formvalue=this.userForm.value;
    const newuser= new User(
      formvalue['lastName'],
      formvalue['firstName'],
      formvalue['email'],
      formvalue['drinkPreference'],
      formvalue['hobbies'] ? formvalue['hobbies'] : []
    );
    this.userService.saveUser(newuser);
    //this.initForm();
    this.router.navigate(['/users'])
  }
  getHobbiesArrayControl() {
    return this.userForm.get('hobbies') as FormArray;
  }
  onAddHobbyControl() {
    const newHobbyControl = this.formBuilder.control('',Validators.required);
    this.getHobbiesArrayControl().push(newHobbyControl);
  }
}
