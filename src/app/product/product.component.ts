import { Component } from '@angular/core';
import { Car } from '../services/car';
import { CarsService } from '../services/cars.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  private _car:Car={}as Car;
  constructor(private route: ActivatedRoute, private service:CarsService){
    const id = this.route.snapshot.paramMap.get("id");
    if(id) this._car=service.getCarById(parseInt(id));
  }
  get car(){
    return this._car;
  }
  getPath():string{
    return`ACCUEIL/${this._car.contract === "purchase"
          ? "VENTE/"
          : "LOCATION/"}${this._car.make} ${this._car.model}${this._car.options
          ? " - " + this._car.options.join(", ")
          : ""}`;
  }
}
