import { Component, Type } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormgeoComponent } from '../formgeo/formgeo.component';
import { ListgeoComponent } from '../listgeo/listgeo.component';
import { ModifygeoComponent } from '../modifygeo/modifygeo.component';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent {
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Añadir Challenge', cols: 1, rows: 1 , html: '', component: FormgeoComponent},
          { title: 'Modificar Challenge', cols: 1, rows: 1 , html: '', component: ModifygeoComponent},
          { title: 'Listado Challenges', cols: 1, rows: 1 , html: '', component: ListgeoComponent},
          // { title: 'Filtro Challenge', cols: 1, rows: 1 , html: '', component: FormchallengeComponent}
        ];
      }

      return [
        { title: 'Añadir Challenge', cols: 1, rows: 1 , html: '', component: FormgeoComponent},
        { title: 'Modificar Challenge', cols: 1, rows: 1 , html: '', component: ModifygeoComponent},
        { title: 'Listado Challenges', cols: 2, rows: 2 , html: '', component: ListgeoComponent},
        // { title: 'Filtro Challenge', cols: 1, rows: 1 , html: '', component: FormchallengeComponent}
      ];
    })
  );
  constructor(private breakpointObserver: BreakpointObserver) {}


}
