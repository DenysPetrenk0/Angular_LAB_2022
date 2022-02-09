import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDateType]'
})
export class DateTypeDirective implements OnInit {

  @Input() valueDate: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.checkDate(this.valueDate);

  }

  private checkDate(value: number) {
    const milliSeconds = 1000 * 60 * 60 * 24 * 14;
    const currentDate = new Date().getTime();
    const date = new Date(value).getTime();
    const result = currentDate - date;
    if (result > milliSeconds) {
      this.renderer.addClass(this.el.nativeElement, "courses-border");
    }
  }
}
