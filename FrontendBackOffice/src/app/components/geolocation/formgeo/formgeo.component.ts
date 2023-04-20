import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { User } from 'src/models/user';
import { Challenge } from 'src/models/challenge';
import { GeolocationService } from 'src/service/geo.service';
import { ListgeoComponent } from '../listgeo/listgeo.component';
import { SharedDataService } from 'src/service/challenge.sharedservices';

@Component({
  selector: 'app-formgeo',
  templateUrl: './formgeo.component.html',
  styleUrls: ['./formgeo.component.scss']
})
export class FormgeoComponent {

  model:any = {challenge:[], coordenadas:'', operativo:true}  

  constructor(private geoService: GeolocationService, private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
  }

  addGeolocation(){
    this.geoService.addGeolocation(this.model).subscribe(data => {
      console.log(this.model);
      this.model = {challenge:'', coordenadas:'', operativo:true};   
      this.sharedDataService.geoAdded.next(true);   
    }, error => {
      console.log(error);
    })
  }


}
