import { Component } from '@angular/core';
import { Feature } from './shared/feature.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Feature = Feature;
  feature = Feature.Recipe;

  onNavigate(feature: Feature) {
    this.feature = feature;
  }
}
