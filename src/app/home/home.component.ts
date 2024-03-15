import { Component } from '@angular/core';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  first:String = '';
  categories:String[] = [];
  recent_recipes:String[] = [];

  constructor(private foodService:FoodService) {

  }

  ngOnInit(): void {
    this.first = this.foodService.getFirstImage();
    this.categories = this.foodService.getAllCategories();
    this.recent_recipes = this.foodService.getRecentRecipes();
  }
}
