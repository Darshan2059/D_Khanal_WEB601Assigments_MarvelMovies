import { Directive,ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
public initialTagStyle: string;
  constructor(private el: ElementRef) {
    this.initialTagStyle = this.el.nativeElement.style.fontWeight
  }
@Input() highlightType?: "type" | "tag";
  @HostListener("mouseover") onMouseOver() {
    if (this.highlightType === "type") {

      this.el.nativeElement.style.textDecoration = "underline";
    }

    if (this.highlightType === "tag") {

      this.el.nativeElement.style.fontWeight = '900';
    }
  }
  @HostListener("mouseout") onMouseOut() {
    if (this.highlightType === "type") {

      this.el.nativeElement.style.textDecoration = "none"
    }

    if (this.highlightType === "tag" ) {

      // reset tag font color back to original value
      this.el.nativeElement.style.fontWeight = this.initialTagStyle;
    }
  }
}
