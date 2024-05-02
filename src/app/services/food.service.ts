import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/Recipe';
import { sample_categories, sample_icons, sample_recipes } from 'src/data';
import { Category } from '../shared/models/Category';
import { Icon } from '../shared/models/Icon';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() {}

  getIcon():string {
    return '/assets/images/icons/icon.png';
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

  getRecipeByCategory(category:string):Recipe[]{
    return this.getAllRecipes().filter(r => r.categories?.includes(category));
  }

  getSocialIcons(): Icon[] {
    return sample_icons;
  }

  getAbout(): string {
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

  getCategoryByPath(categoryPath:string):Category{
    return this.getAllCategories().find(c => c.path == categoryPath) ?? new Category();
  }

  getNameByPath(categoryPath:string):string{
    return this.getAllCategories().find(c => c.path == categoryPath)?.name ?? "";
  }

  getPathByName(categoryName: string): string {
    return this.getAllCategories().find(c => c.name == categoryName)?.path ?? "";
  }


  getsubCategories(name: string): Category[] {
    return sample_categories.filter(c => c.parent_category?.toLowerCase() === name.toLowerCase())
  }

  getsubCategoriesRecipes(subCategories: Category[]): Recipe[][] {
    const subCatRecipes: Recipe[][] = [];
    subCategories.forEach(subCat => {
      const recipesForSubCat: Recipe[] = sample_recipes.filter(recipe =>
          recipe.categories?.some(cat => cat === subCat.name)
      );
      subCatRecipes.push(recipesForSubCat);
  });
  return subCatRecipes;
  }

}
