import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://media4.s-nbcnews.com/j/MSNBC/Components/Video/201802/' +
        'tdy_pop_klg_steak_180215_1920x1080.today-inline-vid-featured-desktop.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
