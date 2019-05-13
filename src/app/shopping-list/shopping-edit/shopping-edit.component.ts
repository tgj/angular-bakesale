import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import {ShoppingListService} from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient = new Ingredient('', undefined);

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem(form: NgForm) {
    this.shoppingListService.add(new Ingredient(this.ingredient.name, this.ingredient.amount));
    form.reset();
  }
}
