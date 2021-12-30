export class User{

    constructor(public username:string,public email:string,public address:string,
                public city:string,public contactno:number){
        this.username=username
        this.email=email
        this.address=address
        this.city=city
        this.contactno=contactno
    }
}