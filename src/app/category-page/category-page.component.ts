import { Component } from '@angular/core';
import { Category } from '../shared/models/Category';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Recipe } from '../shared/models/Recipe';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent {
  category!: Category;
  subCategories: Category[] = [];
  subCatRecipes: Recipe[][] = [];
  categoryRecipes: Recipe[] = [];

  constructor(activatedRoute:ActivatedRoute, private foodService:FoodService) { 
    activatedRoute.params.subscribe((params) => {
      if(params['name'])
      this.category = foodService.getCategoryByPath(params['name']);
      console.log(this.category);
      this.subCategories = this.foodService.getsubCategories(this.category.name);
      this.subCatRecipes = this.foodService.getsubCategoriesRecipes(this.subCategories);
      this.categoryRecipes = this.foodService.getRecipeByCategory(this.category.name);
    })
  }
}
