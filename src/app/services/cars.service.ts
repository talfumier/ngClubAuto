import { Injectable } from '@angular/core';
import _ from 'lodash';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  getCars(top3?:boolean):Car[]{
    const cars=[
      {id:1,make:"BMW",model:"535i",options:["NAVI","LEATHER","ABS"],price:15500,top3:true,img:"vehicule1.jpg"},
      {id:2,make:"BMW",model:"328i",options:["SPORT LINE BODY KIT"],price:8000,top3:true,img:"vehicule1.jpg"},      
      {id:3,make:"FORD",model:"EXPLORER 2015 4WD",price:9000,discount:0.91,top3:true,img:"vehicule1.jpg"},
    ];
    if(!top3) return cars;
    return _.filter(cars,(car) => {
      return car.top3===top3;
    });
  }
}
