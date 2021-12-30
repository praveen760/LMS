import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[
    new User('tom','angular','zzzz','llllll',6),
    new User('jerry','java','wwwwwwwww','kkkkkk',6)
  ]

  getuser(){
     return this.users
  }

  adduser(newbook:User){
    this.users.push(newbook)
} 
delete(i:number){
    this.users.splice(i,1);
}

  constructor() { }
}
