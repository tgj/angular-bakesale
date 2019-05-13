import { UUID } from 'angular2-uuid';

export class Recipe {
  public id: string;
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.id = UUID.UUID();
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
