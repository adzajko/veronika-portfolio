import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  scrollToProjects(): void {
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(response => {
        const elementToScrollTo = document.getElementById('projects');
        elementToScrollTo.scrollIntoView();
      });
    } else {
      const elementToScrollTo = document.getElementById('projects');
      elementToScrollTo.scrollIntoView();
    }
  }
}
