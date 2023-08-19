import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/modules/orders/services/order.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  constructor(private orderService:OrderService){}
  ngOnInit(): void {

  }

  onOrderShowClick(){
    this.orderService.openCart();
  }
}
