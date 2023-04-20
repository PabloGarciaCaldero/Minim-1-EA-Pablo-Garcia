import { Component } from '@angular/core';
import { Geolocation } from 'src/models/geolocation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeolocationService } from 'src/service/geo.service';
import { SharedDataService } from 'src/service/challenge.sharedservices';


@Component({
  selector: 'app-modifygeo',
  templateUrl: './modifygeo.component.html',
  styleUrls: ['./modifygeo.component.scss']
})
export class ModifygeoComponent {

  model:any = {challenge:[], coordenadas:'', operativo:true}  

  constructor(private geoService: GeolocationService, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.editClicked.subscribe(() => {
      this.model = this.sharedDataService.geo;
    });
  } 

  editarChallenge(id:any){
    this.geoService.actualizarGeolocation(id,this.model).subscribe(data =>{
      this.model = {challenge:'', coordenadas:'', operativo:true};   
      this.sharedDataService.challengeAdded.next(true);
    }, error => {
      console.log(error);
    })
  }
}
