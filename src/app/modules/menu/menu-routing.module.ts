import { NgModule } from "@angular/core";
import { MenuListComponent } from "./components/menu-list/menu-list.component";
import { MenuDetailsComponent } from "./components/menu-details/menu-details.component";
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from "src/app/layouts/main-layout/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: "", data: {breadcrumb: "Home"},
    component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'menu-list' },
      { path: 'menu-list', component: MenuListComponent, data: { breadcrumb: "Menu List" } },
      { path: 'menu-details/:menuId', component: MenuDetailsComponent, data: { breadcrumb: "Menu Detail" } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
