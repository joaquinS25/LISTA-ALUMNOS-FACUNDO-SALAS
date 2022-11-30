import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PipeMayusculaPipe } from './pipes/pipe-mayuscula.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    NavBarComponent,
    PipeMayusculaPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
