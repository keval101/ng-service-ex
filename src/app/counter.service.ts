import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactiveCounter = 0;
  InactiveToActiveCounter = 0;
  
  constructor() { }

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter)
  }

  incrementInactivetoActive(){
    this.InactiveToActiveCounter++;
    console.log(this.InactiveToActiveCounter)
  }
}
