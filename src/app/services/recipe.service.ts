import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Burger Town Classic Burger',
      'Similar to Burger King\'s Whopper.',
      'https://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/03299-85%20DIG_Silo_Whopper_500x540_CR_1.png',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Hamburger Patty', 1),
        new Ingredient('Lettuce', 1),
        new Ingredient('Cheese', 1),
      ]
    ),    new Recipe(
      'Classic Chicken Sandwich',
      'Similar to Chick-fil-A\'s Chicken Sandwich.',
      'https://www.cfacdn.com/img/order/COM/Menu_Refresh/Entree/Entree%20Desktop/_0003s_0004_NEW_Stack620_PDP_Chick-Fil-A-Sandwich_1085.png',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Buns', 2),
        new Ingredient('Pickles', 2),
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

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

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
