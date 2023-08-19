import { Component } from '@angular/core';
import { Category } from 'src/app/modules/menu/models/category';
import { MenuService } from 'src/app/modules/menu/services/menu.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  categoriesData:Category[] = [];

  constructor(
    private menuService:MenuService
  ) {
    this.getCategoriesFromAPI();
  }

  slideConfig = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  getCategoriesFromAPI(){
    this.menuService.getMenuCategories().subscribe({
      next: (response) => {
        this.categoriesData = response;
      },
      error: (error) => {
        console.log("Error fetching data", error);
      }
    })
  }
}
