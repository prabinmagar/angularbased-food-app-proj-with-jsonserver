import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Meal } from '../../models/meal';
import { OrderService } from 'src/app/modules/orders/services/order.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.scss']
})
export class MenuDetailsComponent {
  menuItemId!:string;
  menuData:Meal[] = [];
  menuItemDetails!:Meal;
  relatedMenuData:Meal[] = [];
  isDetailLoading:boolean = false;
  isRelatedLoading: boolean = false;

  constructor(
    private route:ActivatedRoute,
    private menuService:MenuService,
    private orderService:OrderService
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let menuId = params.get('menuId');
      if(menuId != null){
        this.menuItemId = menuId;
        this.getMenuDetailsFromAPI(this.menuItemId);
      }
    });
  }

  getMenuDetailsFromAPI(menuId:string){
    this.isDetailLoading = true;
    this.isRelatedLoading = true;

    this.menuService.getMenuData().subscribe({
      next: (response) => {
        this.menuData = response.items;
        this.menuItemDetails = this.menuService.getMenuById(this.menuData, menuId)!;
        this.isDetailLoading = false;

        if(this.menuItemDetails){
          this.relatedMenuData = this.menuService.getDataByCategory(this.menuData, this.menuItemDetails.category);
          this.isRelatedLoading = false;
        }
      },
      error: (error) => {
        console.error("Error fetching data", error);
        this.isDetailLoading = false;
        this.isRelatedLoading = false;
      }
    });
  }

  addToCart(item:any){
    let order = {
      ...item,
      quantity: 1,
    }

    this.orderService.openCart();
    this.orderService.addToCart(order);
  }
}
