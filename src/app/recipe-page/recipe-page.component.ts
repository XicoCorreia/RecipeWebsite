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
  image!: string;
  main_category!:string;
  categoryRecipes!:Recipe[];

  constructor(activatedRoute:ActivatedRoute,private foodService:FoodService) { 
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.recipe = foodService.getRecipeById(params['id']);
      const list_length = this.recipe.categories.length;
      this.main_category = this.recipe.categories[list_length - 1];
      this.categoryRecipes = this.foodService.getRecipeByCategory(this.main_category);
    })
  }

  ngOnInit(): void {
    this.image = this.foodService.getAbout();
  }


  getPath(name: string): string {
    return this.foodService.getPathByName(name); 
  }

  get formattedIngredients() {
    return this.recipe.ingredients.replace(/\n/g, '<br>');
  }
  scroll(el: HTMLElement) {
      el.scrollIntoView();
    }
}
