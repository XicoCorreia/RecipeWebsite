import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SubcategoryPageComponent } from './subcategory-page/subcategory-page.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'recipes/:label', component:RecipePageComponent},
  {path: 'about-me', component:AboutusComponent},
  {path: 'recipes', component:RecipesComponent},
  {path: 'recipe-index', component:CategoriesComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: ':parent_category/:name', component:SubcategoryPageComponent},
  {path: ':name', component:CategoryPageComponent},
  {path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
