import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout/main-layout.component';
import { MenuListComponent } from './modules/menu/components/menu-list/menu-list.component';
import { MenuDetailsComponent } from './modules/menu/components/menu-details/menu-details.component';
import { OrderListComponent } from './modules/orders/components/order-list/order-list.component';

const routes: Routes = [
  // { path: "", redirectTo: "home", pathMatch: 'full'},
  // {
  //   path: "",
  //   component: MainLayoutComponent,
  //   children: [
  //     { path: 'menu-list', component: MenuListComponent },
  //     { path: "menu-details", component: MenuDetailsComponent },
  //     { path: "orders-list", component: OrderListComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
