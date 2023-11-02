import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHashtagToHeading]'
})
export class HashtagToHeadingDirective {

  constructor(private el: ElementRef) { }
  level: number = 1;

  @HostListener('input') onInput() {
    const text = this.el.nativeElement.value;
    const regex = /#+\s(.*)/g;
    const replacedText = text.replace(regex, (match:any, capturedText: any) => {
      this.level = match.split(' ')[0].length - 1 === 0 ? 1 : match.split(' ')[0].length - 1;
      return `<h${this.level}>${capturedText}</h${this.level}>`;
    });
    this.el.nativeElement.value = replacedText;
  }
}
