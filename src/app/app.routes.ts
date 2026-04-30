import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Servicios } from './pages/servicios/servicios';
import { Equipo } from './pages/equipo/equipo';
import { Contacto } from './pages/contacto/contacto';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'servicios', component: Servicios },
  { path: 'equipo', component: Equipo },
  { path: 'contacto', component: Contacto },
  { path: '**', component: NotFound }
];