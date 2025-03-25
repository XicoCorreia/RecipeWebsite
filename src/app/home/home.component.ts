import { Component, Inject } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Recipe } from '../shared/models/Recipe';
import { Category } from '../shared/models/Category';
import { EnumCategories } from '../shared/models/EnumCategories';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  first:Recipe = {
    id: '',
    name: '',
    imageUrl: '',
    steps:  {
      content: [],
      image: '',
      subtitle: ''
    },
    categories: [],
    date: '',
    introduction:{
      introduction: '',
      description: ''
    },
    ingredients:{
      content: [],
      image: '',
      subtitle: ''
    },
    nutritional_values: []
  };
  
  categories:Category[] = [];
  recent_recipes:Recipe[] = [];
  airfryer_recipes:Recipe[] = [];

  constructor(private foodService:FoodService, private titleService: Title, private metaService: Meta, @Inject(DOCUMENT) private dom: any) {}

  ngOnInit(): void {
    this.first = this.foodService.getFirstImage();
    this.categories = this.foodService.getAllCategories();
    this.recent_recipes = this.foodService.getAllRecipes();
    this.airfryer_recipes = this.foodService.getRecipeByCategory(EnumCategories.AirFryer);

    this.titleService.setTitle('Nela\'s Recipes');
    this.metaService.updateTag({ name: 'description', content: 'Explore Nela\'s delicious recipes, from breakfast to dinner, including air fryer recipes and more!' });

    this.metaService.updateTag({ property: 'og:title', content: 'Nela\'s Recipes' });
    this.metaService.updateTag({ property: 'og:description', content: 'Explore a wide range of delicious recipes including air fryer recipes, recent recipes, and more.' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://nelasrecipes.com/assets/images/icons/favicon.png' }); 
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.nelasrecipes.com' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');

    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`) || null
    if (element==null) {
      element= this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel','canonical')
    element.setAttribute('href', 'https://nelasrecipes.com');

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Nela's Recipes - Home",
      "description": "Explore a wide range of delicious recipes including air fryer recipes, recent recipes, and more.",
      "image": 'https://nelasrecipes.com/assets/images/icons/favicon.png', 
      "url": "https://www.nelasrecipes.com",
      "mainEntityOfPage": "https://www.nelasrecipes.com",
      "mainEntity": {
        "@type": "Recipe",
        "name": this.first.name,
        "image": `https://www.nelasrecipes.com/${this.first.imageUrl}`,
        "url": `https://www.nelasrecipes.com/recipes/${this.first.id}`,
        "description": this.first.introduction.description || "A delicious recipe featured on the home page."
      },
      "hasPart": [
        ...this.categories.map(category => ({
          "@type": "CreativeWork",
          "name": category.name,
          "url": `https://www.nelasrecipes.com/${category.path}`
        })),
        ...this.airfryer_recipes.map(recipe => ({
          "@type": "Recipe",
          "name": recipe.name,
          "url": `https://www.nelasrecipes.com/recipes/${recipe.id}`,
          "image": recipe.imageUrl,
          "description": recipe.introduction.description || "Delicious air fryer recipe."
        })),
        ...this.recent_recipes.map(recipe => ({
          "@type": "Recipe",
          "name": recipe.name,
          "url": `https://www.nelasrecipes.com/recipes/${recipe.id}`,
          "image": recipe.imageUrl,
          "description": recipe.introduction.description || "A recent delicious recipe."
        }))
      ]
    };

    // Inject the structured data (JSON-LD) into the meta tags
    this.metaService.updateTag({
      name: 'ld+json',
      content: JSON.stringify(structuredData)
    });
  }
}
