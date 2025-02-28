import { Component } from '@angular/core';
import { Recipe } from '../shared/models/Recipe';
import { FoodService } from '../services/food.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  recipes:Recipe[] = [];

  constructor(private foodService:FoodService, private titleService: Title, private metaService: Meta) {

  }

  ngOnInit(): void {
    this.recipes = this.foodService.getAllRecipes();

    this.titleService.setTitle('All Recipes - Nela\'s Recipes');

    // Set meta description
    this.metaService.updateTag({ name: 'description', content: 'Explore all of Nela\'s delicious recipes! From breakfast to dinner, we have something for everyone.' });

    // Open Graph tags (for social media sharing)
    this.metaService.updateTag({ property: 'og:title', content: 'All Recipes - Nela\'s Recipes' });
    this.metaService.updateTag({ property: 'og:description', content: 'Explore all of Nela\'s delicious recipes! From breakfast to dinner, we have something for everyone.' });
    this.metaService.updateTag({ property: 'og:image', content: 'https://nelasrecipes.com/assets/images/icons/favicon.png' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.nelasrecipes.com/recipes' });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "All Recipes - Nela's Recipes",
      "description": "Explore a variety of recipes across different categories including breakfast, appetizers, desserts, and more.",
      "image": 'https://nelasrecipes.com/assets/images/icons/favicon.png', 
      "url": "https://www.nelasrecipes.com/recipes",
      "hasPart": this.recipes.map(recipe => ({
        "@type": "Recipe",
        "name": recipe.name,
        "image": recipe.imageUrl,
        "url": `https://www.nelasrecipes.com/recipes/${recipe.id}`,
        "description": recipe.introduction.description || "A delicious recipe."
      }))
    };

    // Inject the structured data (JSON-LD) into the meta tags
    this.metaService.updateTag({
      name: 'ld+json',
      content: JSON.stringify(structuredData)
    });

  }
}
