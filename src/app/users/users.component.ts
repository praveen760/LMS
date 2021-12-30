import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor( private userServive:UserService) { }

  users:User[]=[]

  ngOnInit(): void {
    this.users=this.userServive.getuser()
  }
  onuserAdded(newuser:User){
    this.userServive.adduser(newuser)
  }
  delete(i:number){
     this.userServive.delete(i)
  }


}
