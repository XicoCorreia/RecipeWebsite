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
  ingredient:Category[] = [];
  special:Category[] = [];
  cuisine:Category[] = [];

  constructor(private foodService:FoodService) {

  }

  ngOnInit(): void {
    this.courses = this.foodService.getCourseCategories();
    this.desserts = this.foodService.getDessertCategories();
    this.special = this.foodService.getSpecialCategories();
    this.ingredient = this.foodService.getIngredientsCategories();
    this.cuisine = this.foodService.getCuisineCategories();
  }
}
