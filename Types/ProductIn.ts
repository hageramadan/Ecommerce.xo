export interface ProductIn{
  id: number;
  img:string,
  title:string,
  description?:string,
  stock?:number,
  price:string ,
  oldPrice?:string,
  discount?:number
}