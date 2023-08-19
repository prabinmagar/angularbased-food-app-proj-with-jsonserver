export interface Meal {
  id:string;
  imageUrl:string;
  name:string;
  description:string;
  price:number;
  stock:number;
  location:string;
  category:string;
  isOnCart?:boolean;
}
