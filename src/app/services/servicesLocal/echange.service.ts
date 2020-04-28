import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EchangeService {

  private messageSo = new BehaviorSubject<number>(0);
  curMessage = this.messageSo.asObservable();

  
  private messageSo1 = new BehaviorSubject<boolean>(false);
  curMessage1 = this.messageSo1.asObservable();
  constructor() { }

  changeMessage(mesg){
    this.messageSo.next(mesg);
  }

  changeMessage1(mesg){
    this.messageSo1.next(mesg);
  }
}
