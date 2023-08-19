import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuDetailsComponent } from './components/menu-details/menu-details.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { EmptyObjectPipe } from 'src/app/shared/pipes/empty-object.pipe';
import { TitleComponent } from 'src/app/components/title/title.component';
import { MenuRoutingModule } from './menu-routing.module';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@NgModule({
  declarations: [
    MenuListComponent,
    MenuDetailsComponent,
    MenuItemComponent,
    EmptyObjectPipe,
    TitleComponent,
    BreadcrumbComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    MenuListComponent,
    MenuDetailsComponent,
    MenuItemComponent,
    BreadcrumbComponent,
    LoaderComponent
  ]
})
export class MenuModule { }
