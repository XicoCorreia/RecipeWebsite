import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Recipe } from '../shared/models/Recipe';
import { EnumCategories } from '../shared/models/EnumCategories';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent {
  recipe!: Recipe;
  image!: string;
  main_category!:EnumCategories;
  categoryRecipes!:Recipe[];
  recent_recipes!:Recipe[];

  constructor(activatedRoute:ActivatedRoute,private foodService:FoodService, private metaService: Meta, private titleService: Title) { 
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.recipe = foodService.getRecipeById(params['id']);
      const list_length = this.recipe.categories.length;
      this.main_category = this.recipe.categories[list_length - 1];
      this.categoryRecipes = this.foodService.getRecipeByCategory(this.main_category);
      this.recent_recipes = this.foodService.getAllRecipes();
    })
  }

  ngOnInit(): void {
    this.image = this.foodService.getAbout();

    this.titleService.setTitle(`${this.recipe.name} | Nela's Recipes`);

    this.metaService.updateTag({ name: 'description', content: `${this.recipe.name} recipe: ${this.recipe.introduction.description}`});

    // Open Graph Tags for Social Media sharing
    this.metaService.updateTag({ property: 'og:title', content: `${this.recipe.name} | Nela's Recipes` });
    this.metaService.updateTag({ property: 'og:description', content: `${this.recipe.name} recipe: ${this.recipe.introduction.description}`});
    this.metaService.updateTag({ property: 'og:image', content: `https://www.nelasrecipes.com/${this.recipe.imageUrl}` });
    this.metaService.updateTag({ property: 'og:url', content: `https://www.nelasrecipes.com/recipes/${this.recipe.id}`});

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Recipe",
      "name": `https://www.nelasrecipes.com/${this.recipe.imageUrl}`,
      "image": `https://www.nelasrecipes.com/recipes/${this.recipe.id}`,
      "author": {
        "@type": "Person",
        "name": "Francisco Correia",
        "url": "https://www.nelasrecipes.com/about-me",
        "image": `https://nelasrecipes.com/assets/images/about.jpg'`
      },
      "datePublished": this.recipe.date,
      "description": this.recipe.introduction.description,
      "recipeCategory": this.recipe.categories.join(", "),
      "nutrition": {
        "@type": "NutritionInformation",
        "calories": this.recipe.nutritional_values.find(n => n.title === 'Calories')?.description
      },
      "recipeIngredient": this.recipe.ingredients.content.map(ingredient => ingredient.description),
      "recipeInstructions": this.recipe.steps.content.map(step => ({
        "@type": "HowToStep",
        "text": step.description
      }))
    };

    this.metaService.updateTag({
      name: 'ld+json',
      content: JSON.stringify(structuredData)
    });
  }


  getPath(name: string): string {
    return this.foodService.getPathByName(name); 
  }
  
  scroll(el: HTMLElement) {
      el.scrollIntoView();
    }
}
