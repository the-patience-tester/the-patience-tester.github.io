import { Component } from '@angular/core'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [title: string]: any
  constructor (private readonly router: Router) {}
}
