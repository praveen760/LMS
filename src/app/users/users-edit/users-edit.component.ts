import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  @Output() userAdded=new EventEmitter<User>()

  constructor() { }
   
  onSubmit(myForm:NgForm){

    const username=myForm.value.username
    const email=myForm.value.email
    const address=myForm.value.address
    const city=myForm.value.city
    const contactno=myForm.value.contactno
    const newuser=new User(username,email,address,city,contactno)
    this.userAdded.emit(newuser)

  }

  ngOnInit(): void {
  }

}
