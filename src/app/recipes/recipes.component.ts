import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  @Output() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(recipe: Recipe) {
    this.recipe = recipe;
  }

}
