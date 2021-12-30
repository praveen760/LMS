import { EventEmitter, Injectable } from '@angular/core';
import { Issused } from './issused.model';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  issusedSelect=new EventEmitter<Issused>()

  issuesd:Issused[]=[{id:1,userName:'praveen',book:3}]
  
getIssused(){
  return this.issuesd.slice()
}
  

  constructor() { }
}
