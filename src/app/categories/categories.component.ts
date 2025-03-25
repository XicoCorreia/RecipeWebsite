import { Component, Inject } from '@angular/core';
import { FoodService } from '../services/food.service';
import { Recipe } from '../shared/models/Recipe';
import { Category } from '../shared/models/Category';
import { Meta, Title } from '@angular/platform-browser';
import { EnumCategories } from '../shared/models/EnumCategories';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  courses:Category[] = [];
  desserts:Category[] = [];
  ingredient:Category[] = [];
  special:Category[] = [];
  cuisine:Category[] = [];

  constructor(private foodService:FoodService, private titleService:Title, private metaService: Meta, @Inject(DOCUMENT) private dom: any) {

  }

  ngOnInit(): void {
    this.courses = this.foodService.getCourseCategories();
    this.desserts = this.foodService.getDessertCategories();
    this.special = this.foodService.getSpecialCategories();
    this.ingredient = this.foodService.getIngredientsCategories();
    this.cuisine = this.foodService.getCuisineCategories();

     // Set the title for this specific page
     this.titleService.setTitle("Recipe Index | Nela's Recipes");

     // Update meta tags for the "Recipe Index" page
     this.metaService.updateTag({ name: 'description', content: 'Explore a wide array of recipes categorized by course, cuisine, ingredient, and special categories. Find exactly what you’re looking for!' });
     this.metaService.updateTag({ property: 'og:title', content: 'Recipe Index | Nela\'s Recipes' });
     this.metaService.updateTag({ property: 'og:description', content: 'Discover a variety of recipes from appetizers to desserts, categorized by cuisine, ingredient, and more!' });
     this.metaService.updateTag({ property: 'og:image', content: 'https://nelasrecipes.com/assets/images/icons/favicon.png' }); 
     this.metaService.updateTag({ property: 'og:url', content: 'https://www.nelasrecipes.com/recipe-index' });
     this.metaService.updateTag({ property: 'og:type', content: 'website' });

     const head = this.dom.getElementsByTagName('head')[0];
     var element: HTMLLinkElement= this.dom.querySelector(`link[rel='canonical']`) || null
     if (element==null) {
       element= this.dom.createElement('link') as HTMLLinkElement;
       head.appendChild(element);
     }
     element.setAttribute('rel','canonical')
     element.setAttribute('href', 'https://nelasrecipes.com/recipe-index');

     // Structured data for the Recipe Index page
     const structuredData = {
       "@context": "https://schema.org",
       "@type": "CollectionPage",
       "name": "Recipe Index | Nela's Recipes",
       "description": "Browse a curated collection of recipes by course, ingredient, and cuisine. Perfect for food lovers seeking new meals to try.",
       "image": "https://nelasrecipes.com/assets/images/icons/favicon.png", 
       "url": "https://www.nelasrecipes.com/recipe-index",
       "hasPart": Object.values(EnumCategories).map(category => ({
        "@type": "CreativeWork",
        "name": category
      }))
     };
 
     this.metaService.updateTag({
       name: 'ld+json', content: JSON.stringify(structuredData)
     });
  }
}
