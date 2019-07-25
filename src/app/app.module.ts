import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Rutas

import { app_routing } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { SeccionComponent } from './seccion/seccion.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { RegistroComponent } from './componentes/registro/registro.component';

import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../src/environments/environment';
//servicios
import { MomsService } from './servicios/moms.service';
import * as firebase from 'firebase/app';
import { VacantesComponent } from './componentes/vacantes/vacantes.component';

import { FooterComponent } from './componentes/shared/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SeccionComponent,
    FormularioComponent,
    HomeComponent,
    NavbarComponent,
    RegistroComponent,
    VacantesComponent,
    FooterComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [MomsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
