import { Component, OnInit, ViewChild ,ElementRef,EventEmitter,Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/app/shared/book.model';


@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {

  @Output() bookAdded=new EventEmitter<Book>()

  constructor() { }

  onSubmit(myForm:NgForm){
    const isbn=myForm.value.isbn
    const bookname=myForm.value.bookname
    const author=myForm.value.author
    const publisher=myForm.value.publisher
    const quantity=myForm.value.quantity
    const newBook=new Book(isbn,bookname,author,publisher,quantity)
    this.bookAdded.emit(newBook)
  }
  
  ngOnInit(): void {
  
  }

}


