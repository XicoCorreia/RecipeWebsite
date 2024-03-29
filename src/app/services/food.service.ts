import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/Recipe';
import { sample_categories, sample_icons, sample_recipes } from 'src/data';
import { Category } from '../shared/models/Category';
import { Icon } from '../shared/models/Icon';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getIcon():String {
    return '/assets/images/icon.png';
  }

  getFirstImage():Recipe {
    return sample_recipes[0]
  }

  getAllCategories():Category[] {
    return sample_categories
  }

  getAllRecipes():Recipe[] {
    return sample_recipes;
  }

  getRecipeById(recipeId:string):Recipe{
    return this.getAllRecipes().find(recipe => recipe.id == recipeId) ?? new Recipe();
  }

  getSocialIcons(): Icon[] {
    return sample_icons;
  }

  getAbout(): String {
    return '/assets/images/about.jpg';
  }

  getCourseCategories():Category[] {
    return sample_categories.filter(c => !c.parent_category)
  }
  
  getDessertCategories():Category[] {
    return sample_categories.filter(c => c.parent_category === "Dessert")
  }

  getBreakfastCategories():Category[] {
    return sample_categories.filter(c => c.parent_category === "Breakfast")
  }

}
