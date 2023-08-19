import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderItemComponent } from './components/order-item/order-item.component';



@NgModule({
  declarations: [
    OrderListComponent,
    OrderItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderListComponent
  ]
})
export class OrdersModule { }
