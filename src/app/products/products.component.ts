import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../services/car';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  private _contract:string="";
  private _cars:Car[]=[];
  constructor(private router: Router,service:CarsService){
    const param=router.url.split("/")[2];
    if(param==="purchase" || param==="rent"){
      this._contract=param
      this._cars=service.getCarsByContract(param);}
  }
  get contract(){
    return this._contract;
  }
  get cars(){
    return this._cars;
  }
}
