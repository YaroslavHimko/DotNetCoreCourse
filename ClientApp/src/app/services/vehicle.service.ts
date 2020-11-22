import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SaveVehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private readonly vehiclesEndpoint = '/api/vehicles';

  constructor(private Http: HttpClient) { } 
  getFeatures() {
    return this.Http.get('/api/features')
  }
  getMakes() {
    return this.Http.get('/api/makes')
  }

  create(vehicle) {
    return this.Http.post('/api/vehicles', vehicle)
  }

  getVehicle(id) {
    return this.Http.get("/api/vehicles/" + id)
    }

  
    getVehicles(filter) {
      return this.Http.get(this.vehiclesEndpoint + '?' + this.toQueryString(filter));
    }
  
    toQueryString(obj) {
      var parts = [];
      for (var property in obj) {
        var value = obj[property];
        if (value != null && value != undefined) 
          parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
      }
  
      return parts.join('&');
    }

  update(vehicle: SaveVehicle) {
    return this.Http.put(this.vehiclesEndpoint + '/' + vehicle.id, vehicle)
  }

  delete(id) {
    return this.Http.delete(this.vehiclesEndpoint + '/' + id)
  }
}