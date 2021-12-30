export class Book{

    constructor(public isbn:number,public bookname:string,public author:string,
                public publisher:string,public quantity:number){
        this.isbn=isbn
        this.bookname=bookname
        this.author=author
        this.publisher=publisher
        this.quantity=quantity
    }
}