import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../shared/book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  @ViewChild('myForm', { static: false }) "myForm": NgForm;

  // @Input() 

   books:Book[]=[]
  constructor(private bookservice:BookService) { }
//add book
  onbookAdded(newbook:Book){
    this.bookservice.addbook(newbook)
  }

  //delete
  delete(i:number){
    this.bookservice.delete(i)
  }

  //edit
  edit(i:number,isbn:number,bookname:string,author:string,publisher:string,quantity:number){

   const setvalue=this.myForm.setValue({
     isbn:isbn ,
     bookname: bookname,
     author:author,
     publisher:publisher,
     quantity:quantity
   });
   
   this.bookservice.editele(i);
    }


  ngOnInit():void{
    this.books=this.bookservice.getbook()
  
  }
    

  }


