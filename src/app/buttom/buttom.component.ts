import { Component, OnInit } from '@angular/core';
import { interval, timeout } from 'rxjs';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrls: ['./buttom.component.css']
})
export class ButtomComponent implements OnInit {
  interval: ReturnType<typeof setInterval> | undefined;
  num = 0;
  click = false;
  show(): void {
    this.anShow();
    this.num = 0;
    this.click = true;
    this.interval = setInterval(()=>{
      this.num += 1;
    }, 1000);
  }

  anShow(): void {
    if(this.interval){
      clearInterval(this.interval);
    }
  }

  stop(): void {
    this.click = false;
  }
  constructor() { }

  ngOnInit() {
   
  }

}
