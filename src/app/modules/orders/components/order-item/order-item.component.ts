import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit{
  @Input() orderItem:any;

  constructor(private orderService:OrderService){}

  ngOnInit(): void {
  }

  onQtyIncrease(id:string){
    this.orderService.increaseOrderQty(id);
  }

  onQtyDecrease(id:string){
    this.orderService.decreaseOrderQty(id);
  }
}
