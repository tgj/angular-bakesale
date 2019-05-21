import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient(
      'Apples',
      5
    ),
    new Ingredient(
      'Tomatoes',
      10
    )
  ];


  constructor() { }

  list() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = [
      ...this.ingredients,
      ...ingredients
    ];
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  add(ingredient: Ingredient) {
    this.addIngredients([ingredient]);
  }
}
