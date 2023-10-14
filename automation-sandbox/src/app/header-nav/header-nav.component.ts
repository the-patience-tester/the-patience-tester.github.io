import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent {
  constructor(private router: Router) {}
  navigateToCalculator() {
    this.router.navigate(['/calculator']);
  }
  navigateToLanding() {
    this.router.navigate(['/']);
  }
}
