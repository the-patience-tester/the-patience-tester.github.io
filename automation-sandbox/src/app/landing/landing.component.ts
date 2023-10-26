import { Component } from '@angular/core'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Router } from '@angular/router'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private readonly router: Router) {}
}
