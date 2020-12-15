import { Directive, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[upperCase]'
})
export class UpperCaseDirective {

  constructor(Element: ElementRef) {
    console.log('[upperCase]');
    Element.nativeElement.style = "text-transform: uppercase"
  }

}
