import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/book.service';
import { Book } from '../shared/book.model';
import { User } from '../shared/user.model';
import { UserService } from '../users/user.service';
import { Ibook } from '../shared/ibook.model';
@Component({
  selector: 'app-issused-book',
  templateUrl: './issused-book.component.html',
  styleUrls: ['./issused-book.component.css']
})
export class IssusedBookComponent implements OnInit {


  users:User[]=[]
  books:Book[]=[]
  ibooks:Ibook[]=[
    new Ibook('tom','angular')
  ]

  constructor(private userService:UserService,private bookService:BookService) { }
  

  ngOnInit(): void {
    this.users=this.userService.getuser();
    this.books=this.bookService.getbook()
  }

}
