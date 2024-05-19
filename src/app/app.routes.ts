import {Routes} from '@angular/router';
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {HomeComponent} from "./pages/home/home.component";
import {LoginComponent} from "./pages/login/login.component";
import {AuthLayoutComponent} from "./layouts/auth-layout/auth-layout.component";

export const routes: Routes = [
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
      {path: '', component: HomeComponent},
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {path: '', component: LoginComponent},
    ],
  },
  {
    path: 'docs',
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/documentation/documentation.routes').then(m => m.DocumentationRoutingModule)
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
