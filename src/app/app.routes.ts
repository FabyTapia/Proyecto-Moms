import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { SeccionComponent } from './seccion/seccion.component';
import { RegistroComponent } from './componentes/registro/registro.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'seccion', component: SeccionComponent },

    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);