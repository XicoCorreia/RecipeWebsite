import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'recipes/:id', component:RecipePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
