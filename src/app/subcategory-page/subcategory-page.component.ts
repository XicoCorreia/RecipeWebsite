import { Component } from '@angular/core';
import { Category } from '../shared/models/Category';
import { Recipe } from '../shared/models/Recipe';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-subcategory-page',
  templateUrl: './subcategory-page.component.html',
  styleUrls: ['./subcategory-page.component.css']
})
export class SubcategoryPageComponent {
  category!: Category;
  parent_category!: string;
  subCategories: Category[] = [];
  categoryRecipes: Recipe[] = [];

  constructor(activatedRoute:ActivatedRoute, private foodService:FoodService) { 
    activatedRoute.params.subscribe((params) => {
      if(params['name'])
      this.category = foodService.getCategoryByName(params['name']);
      if(params['parent_category'])
      this.parent_category = params['parent_category'];
      this.subCategories = this.foodService.getsubCategories(this.category.name);
      this.categoryRecipes = this.foodService.getRecipeByCategory(this.category.name);
    })
  }
}
