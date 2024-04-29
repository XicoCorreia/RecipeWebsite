import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { SubcategoryPageComponent } from './subcategory-page/subcategory-page.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'recipes/:id', component:RecipePageComponent},
  {path: 'about-me', component:AboutusComponent},
  {path: 'recipes', component:RecipesComponent},
  {path: 'recipes-index', component:CategoriesComponent},
  {path: ':name', component:CategoryPageComponent},
  {path: ':parent_category/:name', component:SubcategoryPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
