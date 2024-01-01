export interface Car {
  id:number,
  make:string,
  model:string,
  options?:string[],
  price:number,
  discount?:number,
  top3:boolean,
  img:string,//image file name including extension
}
