import { Directive,HostListener,ElementRef } from '@angular/core';
@Directive({
  selector: '[appNumberic]'
})
export class NumbericDirective {

  constructor(
    private elements: ElementRef

  ) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    const initalValue =(this.elements.nativeElement.value);
    this.elements.nativeElement.value =(initalValue.replace(/[^0-9]*/g, ''));
    if (initalValue !==this.elements.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
