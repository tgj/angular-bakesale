import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event.target']) documentClick(target) {
    if (this.isOpen && !this.eRef.nativeElement.contains(target)) {
      this.isOpen = false;
    }
  }

  constructor(private eRef: ElementRef) { }

}
