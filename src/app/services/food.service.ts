import { Injectable } from '@angular/core';
import { Recipe } from '../shared/models/Recipe';
import { categories_cuisine, categories_ingredient, categories_special, course_categories, sample_categories} from 'src/dataCategories';
import { Category } from '../shared/models/Category';
import { Icon } from '../shared/models/Icon';
import { EnumCategories } from '../shared/models/EnumCategories';
import { sample_recipes } from 'src/dataRecipes';
import { sample_icons } from 'src/dataIcons';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {}

  getIcon():string {
    return 'assets/images/icons/icon.png';
  }

  getFirstImage():Recipe {
    return sample_recipes.reverse()[0];
  }

  getAllCategories():Category[] {
    return sample_categories
  }

  getAllRecipes():Recipe[] {
    return sample_recipes.reverse();
  }

  getRecipeById(recipeId:string):Recipe{
    return this.getAllRecipes().find(recipe => recipe.id == recipeId) ?? new Recipe();
  }

  getRecipeByCategory(category:EnumCategories):Recipe[]{
    return this.getAllRecipes().filter(r => r.categories?.includes(category));
  }

  getSocialIcons(): Icon[] {
    return sample_icons;
  }

  getAbout(): string {
    return 'assets/images/about.jpg';
  }

  getCourseCategories():Category[] {
    return course_categories;
  }
  
  getDessertCategories():Category[] {
    return this.getAllCategories().filter(c => c.parent_category == "Dessert");
  }

  getBreakfastCategories():Category[] {
    return this.getAllCategories().filter(c => c.parent_category == "Breakfast");
  }

  getSpecialCategories(): Category[] {
    return categories_special;
  }

  getIngredientsCategories(): Category[] {
    return categories_ingredient;
  }

  getCuisineCategories(): Category[] {
    return categories_cuisine;
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
