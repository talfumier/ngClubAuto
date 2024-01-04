import { Component,Input, OnInit } from '@angular/core';
import { Car } from '../services/car';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input() data:Car={} as Car;
  private _car:Car={} as Car;
  
  ngOnInit(): void {
    this._car=this.data;
    console.log(this.data)
  }
  get car(){
    return this._car;
  }
}
