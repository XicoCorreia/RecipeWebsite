import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Recipe } from '../shared/models/Recipe';
import { Category } from '../shared/models/Category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  first:Recipe = {
    id: '',
    name: '',
    imageUrl: '',
    steps: [],
    categories: []
  };
  
  categories:Category[] = [];
  recent_recipes:Recipe[] = [];

  constructor(private foodService:FoodService) {

  }

  ngOnInit(): void {
    this.first = this.foodService.getFirstImage();
    this.categories = this.foodService.getAllCategories();
    this.recent_recipes = this.foodService.getAllRecipes();
  }
}
