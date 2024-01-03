import { Component } from '@angular/core';
import { Car } from '../services/car';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private _cars:Car[];
  constructor(private service:CarsService){
    this._cars=service.getCars(true);
  }
  get cars(){
    return this._cars;
  }
}
