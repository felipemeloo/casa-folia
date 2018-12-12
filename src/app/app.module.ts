import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    NavbarComponent,
    TooltipsComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
