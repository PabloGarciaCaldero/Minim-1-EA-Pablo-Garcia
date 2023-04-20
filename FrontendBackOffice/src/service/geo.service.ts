import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Geolocation } from 'src/models/geolocation';

@Injectable({
  providedIn: 'root'
})

export class GeolocationService {
  url = 'http://127.0.0.1:3002/geolocation';

  constructor(private http: HttpClient) { }

  getGeolocations(): Observable<Geolocation[]> {
    return this.http.get<Geolocation[]>(this.url + '/get/all');
  }

  addGeolocation(challenge: Geolocation): Observable<any>{
    return this.http.post(this.url + '/add', challenge);
  }

  deleteGeolocation(id: String): Observable<any> {
    return this.http.delete(this.url + '/delete/' + id);
  } 

  actualizarGeolocation(id:String, challenge: Geolocation): Observable<any>{
    return this.http.post(this.url + '/update/' + id, challenge);
  }

}