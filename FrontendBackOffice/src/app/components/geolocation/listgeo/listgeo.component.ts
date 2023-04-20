import { Component } from '@angular/core';
import { Geolocation } from 'src/models/geolocation';
import { GeolocationService } from 'src/service/geo.service';
import { SharedDataService } from 'src/service/challenge.sharedservices';

@Component({
  selector: 'app-listgeo',
  templateUrl: './listgeo.component.html',
  styleUrls: ['./listgeo.component.scss']
})
export class ListgeoComponent {
  model:Geolocation = {_id:'', challenge:[], coordenadas:'', operativo:true}  

  constructor(private geoService: GeolocationService, private sharedDataService: SharedDataService) {}


  ngOnInit(): void {
    this.obtenerGeolocation();
    this.sharedDataService.geoAdded.subscribe(() => {
      this.obtenerGeolocation();
    });
  }

  geolocation: Geolocation [] = [];

  obtenerGeolocation(){
    this.geoService.getGeolocations().subscribe(data => {
      console.log(data);
      this.geolocation = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarGeo(id:string){
    var answer = confirm('Estas seguro de querer eliminarlo?');
    if(answer){
      this.geoService.deleteGeolocation(id).subscribe(data => {
        this.obtenerGeolocation();    
      }, error => {
        console.log(error);
      })
    }    
  }

  editarGeo(i:any){
    this.sharedDataService.geo = this.geolocation[i];
    this.sharedDataService.editClickedGeo.next(true);
  }
}
