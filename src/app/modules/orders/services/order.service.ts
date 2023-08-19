import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Meal } from '../../menu/models/meal';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private isCartOpenSubject = new BehaviorSubject<boolean>(false);
  isCartOpen$ = this.isCartOpenSubject.asObservable();

  private orderItemsSubject = new BehaviorSubject<any[]>([]);
  public orderItems$ = this.orderItemsSubject.asObservable();

  ordersData:any[] = [];
  private readonly CART_KEY = 'orderItems';

  constructor() {
    this.ordersData = this.getCartItems();
  }

  openCart():void{
    this.isCartOpenSubject.next(true);
  }

  closeCart():void{
    this.isCartOpenSubject.next(false);
  }

  getCartItems():any[]{
    const cartItemsStr = localStorage.getItem(this.CART_KEY);
    return cartItemsStr ? JSON.parse(cartItemsStr) : [];
  }

  getCartItemsObservable():Observable<any[]>{
    const cartItems = this.getCartItems();
    return of(cartItems);
  }

  clearCart():void{
    localStorage.removeItem(this.CART_KEY);
  }

  addToCart(orderItem:any){
    const existingItemIndex = this.ordersData.findIndex(item => item.id === orderItem.id);

    if(existingItemIndex !== -1){
      this.ordersData[existingItemIndex].quantity += orderItem.quantity;
    } else {
      this.ordersData.push(orderItem);
    }
    localStorage.setItem(this.CART_KEY, JSON.stringify(this.ordersData));
    this.orderItemsSubject.next(this.ordersData);
  }

  removeFromCart(id:string){
    const tempOrdersData = this.ordersData.filter(item => item.id !== id);
    this.ordersData = tempOrdersData;
    localStorage.setItem(this.CART_KEY, JSON.stringify(tempOrdersData));
    this.orderItemsSubject.next(this.ordersData);
  }

  increaseOrderQty(id:string){
    this.ordersData.map((item) => {
      if(item.id === id){
        let tempQuantity = item.quantity;
        tempQuantity++;
        if(tempQuantity > item.stock){
          item.quantity = item.stock;
        } else {
          return {
            ...item,
            quantity: item.quantity++
          }
        }
      }
      return item;
    });

    this.orderItemsSubject.next(this.ordersData);
    localStorage.setItem(this.CART_KEY, JSON.stringify(this.ordersData));
  }

  decreaseOrderQty(id:string){
    this.ordersData.map((item) => {
      if(item.id === id){
        let tempQuantity = item.quantity;
        tempQuantity--;
        if(tempQuantity === 0){
          this.removeFromCart(id);
          return;
        }
        return {
          ...item,
          quantity: item.quantity--
        }
      }
    });

    this.orderItemsSubject.next(this.ordersData);
    localStorage.setItem(this.CART_KEY, JSON.stringify(this.ordersData));
  }

  getTotalPrice():number{
    return this.ordersData.reduce((totalPrice, item) => totalPrice + (item.price * item.quantity), 0)
  }

  getNumberOfItems():number{
    return this.ordersData.length;
  }

  // findItemInCart(id:string): boolean {
  //   let itemExists = this.ordersData.some(item => item.id === id);
  //   return itemExists ? true : false;
  // }
}
