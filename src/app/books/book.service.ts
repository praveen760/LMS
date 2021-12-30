import { Injectable } from '@angular/core';
import { Book } from '../shared/book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:Book[]=[
    new Book(1,'angular','zzzz','llllll',6),
    new Book(2,'java','wwwwwwwww','kkkkkk',6)
  ]

  getbook(){
     return this.books
  }

  addbook(newbook:Book){
    this.books.push(newbook)
} 
delete(i:number){
  this.books.splice(i,1)
}

editele(i:number){
  this.books.splice(i,1)

}

  constructor() { }
}
