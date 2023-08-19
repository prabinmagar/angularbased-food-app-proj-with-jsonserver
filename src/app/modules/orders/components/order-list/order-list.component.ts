import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  isCartOpen:boolean = false;
  orderItems:any[] = [];
  private unsubscribe$ = new Subject<void>();
  totalPrice:number = 0;

  constructor(private orderService:OrderService){}

  ngOnInit(): void {
    this.orderService.isCartOpen$.pipe(takeUntil(this.unsubscribe$)).subscribe((isOpen) => {
      this.isCartOpen = isOpen;
    });

    this.orderService.orderItems$.pipe(takeUntil(this.unsubscribe$)).subscribe(items => {
      this.orderItems = items;
      this.totalPrice = this.orderService.getTotalPrice();
    });

    this.orderService.getCartItemsObservable().pipe(takeUntil(this.unsubscribe$)).subscribe(cartItems => {
      this.orderItems = cartItems;
    });
  }

  closeCart():void{
    this.orderService.closeCart();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
