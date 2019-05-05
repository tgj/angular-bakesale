import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  ingredient = new Ingredient();

  constructor() {
  }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    this.ingredientAdded.emit(Object.assign({}, this.ingredient));
    form.reset();
  }
}
