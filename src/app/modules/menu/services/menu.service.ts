import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Meal } from '../models/meal';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getMenuData():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/menu`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log("An error occurred: ", error);
        throw new Error("Something went wrong.");
      })
    )
  }

  getDataByCategory(data:Meal[], category:string){
    return data.filter((item:Meal) => {
      return item.category === category;
    })
  }

  getMenuCategories():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/categories`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log("An error occurred:", error);
        throw new Error("Something went wrong.");
      })
    )
  }

  getMenuById(data:Meal[], menuId:string){
    return data.find((item:Meal) => {
      return item.id === menuId;
    })
  }
}
