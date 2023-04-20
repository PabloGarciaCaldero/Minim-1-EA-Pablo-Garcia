import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { UsuariosComponent } from './components/user/usuarios/usuarios.component';
import { ChallengesComponent } from './components/challenge/challenges/challenges.component';
import { MapaComponent } from './components/map/mapa/mapa.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService as AuthGuard} from './components/auth/auth-guard.service';
import { GeolocationComponent } from './components/geolocation/geolocation/geolocation.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'challenges',
    component: ChallengesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mapa',
    component: MapaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'geo',
    component: GeolocationComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
