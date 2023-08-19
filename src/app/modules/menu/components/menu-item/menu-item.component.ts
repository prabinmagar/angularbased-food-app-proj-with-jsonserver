import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../../models/meal';
import { OrderService } from 'src/app/modules/orders/services/order.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem!:Meal;
  defaultImageUrl:string = "assets/img-not-found.jpg";

  constructor(private orderService:OrderService, private menuService:MenuService){}

  ngOnInit(): void {
  }

  handleImageError(){
    this.menuItem.imageUrl = this.defaultImageUrl;
  }

  addToCart(item:any){
    let order = {
      ...item,
      quantity: 1,
    }

    this.orderService.openCart();
    this.orderService.addToCart(order);
  }

  // checkItemInCart(id:string){
  //   return this.orderService.findItemInCart(id);
  // }

  onQtyIncrease(id:string){
    this.orderService.increaseOrderQty(id);
  }

  onQtyDecrease(id:string){
    this.orderService.decreaseOrderQty(id);
  }
}
