import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'veronika-portfolio';
  offsetTop = 0;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollEvent, true);
    AOS.init({
      duration: 600,
      once: true
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  private scrollEvent = event => {
    this.offsetTop = event.currentTarget.pageYOffset;
  }
}
