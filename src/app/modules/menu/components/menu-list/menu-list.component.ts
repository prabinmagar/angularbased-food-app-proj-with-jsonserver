import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Meal } from '../../models/meal';
import { Category } from '../../models/category';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  menuData:Meal[] = [];
  categoriesData:Category[] = [];
  foodMenuData:Meal[] = [];
  bestFoodTitle:string = "Best Meal To Order Online";
  activeCategory!:string;
  isLoading:boolean = false;

  constructor(private menuService:MenuService){}

  ngOnInit(): void {
    this.getCategoriesFromAPI();
  }

  getMenuFromAPI(categoryName:string){
    this.isLoading = true;
    this.menuService.getMenuData().subscribe({
      next: (response) => {
        this.menuData = response.items;
        this.foodMenuData = this.menuService.getDataByCategory(this.menuData, categoryName);
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Error fetching data", error);
        this.isLoading = false;
      }
    })
  }

  getCategoriesFromAPI(){
    this.menuService.getMenuCategories().subscribe({
      next: (response) => {
        this.categoriesData = response;
        this.activeCategory = "best-foods";
        if(this.activeCategory){
          this.getMenuFromAPI(this.activeCategory);
        }
      },
      error: (error) => {
        console.log("Error fetching data", error);
      }
    })
  }

  onCategorySelection(categoryName:string){
    this.activeCategory = categoryName;
    this.foodMenuData = this.menuService.getDataByCategory(this.menuData, categoryName);
  }

  replaceAndCapitalizeString(text:string){
    const replacedString = text.replace("-", " ");
    const capitalizedString = replacedString.charAt(0).toUpperCase() + replacedString.slice(1);
    return capitalizedString;
  }
}
