import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../shared/models/Category';
import { Recipe } from '../shared/models/Recipe';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Meta, Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subcategory-page',
  templateUrl: './subcategory-page.component.html',
  styleUrls: ['./subcategory-page.component.css']
})
export class SubcategoryPageComponent implements OnInit, OnDestroy {
  category!: Category;
  parent_path!: string;
  parent_name!: string;
  subCategories: Category[] = [];
  categoryRecipes: Recipe[] = [];
  private routeSubscription!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private metaService: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.routeSubscription = this.activatedRoute.params.subscribe((params) => {
      if (params['name'] && params['parent_category']) {
        this.category = this.foodService.getCategoryByPath(params['parent_category'] + '/' + params['name']);
        this.parent_path = params['parent_category'];
        this.parent_name = this.foodService.getNameByPath(this.parent_path);
        this.subCategories = this.foodService.getsubCategories(this.category.name);
        this.categoryRecipes = this.foodService.getRecipeByCategory(this.category.name);
        
        // Update meta tags each time route changes
        this.updateMetaTags();
      }
    });
  }

  updateMetaTags(): void {
    this.titleService.setTitle(`${this.category.name} Recipes - ${this.parent_name} | Nela's Recipes`);
    
    this.metaService.updateTag({
      name: 'description',
      content: `Explore our selection of ${this.category.name.toLowerCase()} recipes in the ${this.parent_name} category. Discover new dishes for every occasion.`
    });

    this.metaService.updateTag({ property: 'og:title', content: `${this.category.name} Recipes - ${this.parent_name} | Nela's Recipes` });
    this.metaService.updateTag({ property: 'og:description', content: `Browse through delicious ${this.category.name.toLowerCase()} recipes in the ${this.parent_name} category. Perfect for food lovers looking for inspiration.` });
    this.metaService.updateTag({ property: 'og:image', content: `https://www.nelasrecipes.com/${this.category.imageUrl}` });
    this.metaService.updateTag({ property: 'og:url', content: `https://www.nelasrecipes.com/${this.parent_path}/${this.category.name.toLowerCase()}` });

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": `${this.category.name} Recipes - ${this.parent_name} | Nela's Recipes`,
      "description": `Explore a variety of ${this.category.name.toLowerCase()} recipes in the ${this.parent_name} category.`,
      "image": `https://www.nelasrecipes.com/${this.category.imageUrl}`, 
      "url": `https://www.nelasrecipes.com/${this.parent_path}/${this.category.name.toLowerCase()}`,
      "hasPart": this.subCategories.map(subCategory => ({
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
    // Clean up the subscription to prevent memory leaks
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}
