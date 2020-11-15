import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private Http: HttpClient) { } 
  getFeatures(){
    return this.Http.get('/api/features')
  }
  getMakes() {
    return this.Http.get('/api/makes')
    
  }

  create(vehicle){
    return this.Http.post('/api/vehicles', vehicle)
  }
}