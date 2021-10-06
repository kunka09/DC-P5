import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  constructor() {
    for (var i=0; i<6; i++){
      this.randomNumber.push(Math.floor(Math.random()*46)+1)
    }
  }
  ngOnInit(): void {
  }

  randomNumber:any = []
  selected:any

  buttonSelect(num: number){
    this.selected = num
  }


}
