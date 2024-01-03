import { Injectable } from '@angular/core';
import _ from 'lodash';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private txt:string="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, culpa. Est iste, saepe rem ab voluptatem deserunt assumenda aliquam delectus!";
  private details={description:"dddd"+this.txt,technique:"tttt"+this.txt,options:"oooo"+this.txt,contact:"cccc"+this.txt}
  private cars=[
    {id:1,make:"BMW",model:"535i",options:["NAVI","LEATHER","ABS"],contract:"purchase",price:15500,top3:true,img:"vehicule1.jpg",details:this.details},
    {id:2,make:"BMW",model:"328i",options:["SPORT LINE BODY KIT"],contract:"purchase",price:8000,top3:false,img:"vehicule1.jpg",details:this.details},      
    {id:3,make:"FORD",model:"EXPLORER 2015 4WD",contract:"purchase",price:9000,discount:0.91,top3:true,img:"vehicule1.jpg",details:this.details},     
    {id:4,make:"FERRARI",model:"TESTA ROSSA",contract:"rent",price:6500,discount:0.85,top3:true,img:"vehicule1.jpg",details:this.details},
  ];
  getCars(top3?:boolean):Car[]{
    if(!top3) return this.cars;
    return _.filter(this.cars,(car) => {
      return car.top3===top3;
    });
  }
  getCarsByContract(contract:string):Car[]{
    if(!contract) return [];
    return _.filter(this.cars,(car) => {
      return car.contract===contract;
    });
  }
  getCarById(id:number):any {
    if(!id) return null;
    return _.filter(this.cars,(car) => {
      return car.id===id;
    })[0];
  }
}
