import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Recipe } from '../shared/models/Recipe';
import { Category } from '../shared/models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  courses:Category[] = [];
  desserts:Category[] = [];
  breakfast:Category[] = [];
  special:Category[] = [];

  constructor(private foodService:FoodService) {

  }

  ngOnInit(): void {
    this.courses = this.foodService.getCourseCategories();
    this.desserts = this.foodService.getDessertCategories();
    this.breakfast = this.foodService.getBreakfastCategories();
    this.special = this.foodService.getSpecialCategories();
  }
}
