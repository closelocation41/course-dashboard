import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: SideMenuComponent }
];
