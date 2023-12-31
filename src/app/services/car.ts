import { Details } from "./details";

export interface Car {
  id:number,
  make:string,
  model:string,
  options?:string[],
  contract:string,
  price:number,
  discount?:number,
  top3:boolean,
  img:string,//image file name including extension
  details:Details
}
