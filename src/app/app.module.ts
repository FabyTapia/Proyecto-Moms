import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { SeccionComponent } from './seccion/seccion.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SeccionComponent,
    FormularioComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }