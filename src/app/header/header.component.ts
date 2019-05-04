import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  Feature
} from '../shared/feature.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<Feature>();
  Feature = Feature;

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: Feature) {
    this.featureSelected.emit(feature);
  }

}
