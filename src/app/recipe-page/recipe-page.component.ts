import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Recipe } from '../shared/models/Recipe';
@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent {
  recipe!: Recipe;

  constructor(activatedRoute:ActivatedRoute, foodService:FoodService) { 
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.recipe = foodService.getRecipeById(params['id']);
    })
  }
}
