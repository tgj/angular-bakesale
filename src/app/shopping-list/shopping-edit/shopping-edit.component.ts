import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  ingredient = new Ingredient('', 0);

  constructor() {
  }

  ngOnInit() {
  }

  onAddItem() {
    this.ingredient.name = this.nameInput.nativeElement.value;
    this.ingredient.amount = Number(this.amountInput.nativeElement.value);
    this.ingredientAdded.emit(this.ingredient);
  }
}
