import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})

export class ScrollToTopComponent implements OnInit {
  windowScrolled!: boolean;
  constructor(@Inject(DOCUMENT) private document: Document) {}
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && (document.documentElement.scrollTop || document.body.scrollTop) < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
      const scrollStep = () => {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll <= 1) {
              window.scrollTo(0, 0);
              return;
          }
          window.scrollTo(0, currentScroll - Math.max(1, currentScroll / 8));
          requestAnimationFrame(scrollStep);
      };
      requestAnimationFrame(scrollStep);
  }
  ngOnInit() {}
}

