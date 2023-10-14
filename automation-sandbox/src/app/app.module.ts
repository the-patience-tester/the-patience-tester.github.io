import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CalculatorComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
