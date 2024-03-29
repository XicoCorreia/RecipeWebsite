import { Component } from '@angular/core';
import { Recipe } from '../shared/models/Recipe';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes:Recipe[] = [];

  constructor(private foodService:FoodService) {

  }

  ngOnInit(): void {
    this.recipes = this.foodService.getAllRecipes();
  }
}
