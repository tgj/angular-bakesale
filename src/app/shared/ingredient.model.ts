import {UUID} from 'angular2-uuid';

export class Ingredient {
  public id: string;
  constructor(public name: string, public amount) {
    this.id = UUID.UUID();
  }
}
