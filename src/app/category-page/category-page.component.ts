import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../shared/models/Category';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Recipe } from '../shared/models/Recipe';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit, OnDestroy {
  category!: Category;
  subCategories: Category[] = [];
  subCatRecipes: Recipe[][] = [];
  categoryRecipes: Recipe[] = [];
  private routeSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private metaService: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    // Subscribe to route changes to update meta tags dynamically
    this.routeSubscription = this.activatedRoute.params.subscribe((params) => {
      if (params['name']) {
        this.category = this.foodService.getCategoryByPath(params['name']);
        this.subCategories = this.foodService.getsubCategories(this.category.name);
        this.subCatRecipes = this.foodService.getsubCategoriesRecipes(this.subCategories);
        this.categoryRecipes = this.foodService.getRecipeByCategory(this.category.name);
        
        // Update meta tags after loading new category data
        this.updateMetaTags();
      }
    });
  }

  updateMetaTags(): void {
    // Set the page title and meta tags based on the category
    this.titleService.setTitle(`${this.category.name} Recipes | Nela's Recipes`);
    
    this.metaService.updateTag({
      name: 'description',
      content: `Explore a variety of delicious ${this.category.name.toLowerCase()} recipes. Find easy-to-make dishes that fit every occasion and taste.`
    });

    this.metaService.updateTag({ property: 'og:title', content: `${this.category.name} Recipes | Nela's Recipes` });
    this.metaService.updateTag({
      property: 'og:description',
      content: `Discover our collection of ${this.category.name.toLowerCase()} recipes. Perfect for all food lovers.`
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: `https://www.nelasrecipes.com/${this.category.imageUrl}`
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: `https://www.nelasrecipes.com/${this.category.name.toLowerCase()}`
    });

    // Structured data for the main category page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `${this.category.name} Recipes | Nela's Recipes`,
      "description": `Find a curated selection of ${this.category.name.toLowerCase()} recipes on Nela's Recipes.`,
      "image": `https://www.nelasrecipes.com/${this.category.imageUrl}`,
      "url": `https://www.nelasrecipes.com/${this.category.name.toLowerCase()}`,
      "hasPart": this.subCategories.map((subCategory) => ({
        "@type": "CreativeWork",
        "name": subCategory.name
      }))
    };

    this.metaService.updateTag({
      name: 'ld+json',
      content: JSON.stringify(structuredData)
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from the route subscription to prevent memory leaks
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
