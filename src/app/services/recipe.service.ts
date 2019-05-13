import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201802/tdy_pop_klg_steak_180215_1920x1080.today-inline-vid-featured-desktop.jpg'
    ),    new Recipe(
      'A Test Recipe 2',
      'This is simply another test',
      'https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201802/tdy_pop_klg_steak_180215_1920x1080.today-inline-vid-featured-desktop.jpg'
    )
  ];

  constructor() {}

  list() {
    return this.recipes.slice();
  }

  get(id: string): Recipe {
    return this.recipes.slice().filter(recipe => recipe.id === id)[0];
  }

  add(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  edit(id: string, key: string, value: any): void {
    const recipeToEdit = this.get(id);
    recipeToEdit[key] = value;
  }

  delete(id: string): Recipe {
    const recipeToDelete = this.get(id);
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    return recipeToDelete;
  }

}
