import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private Http: HttpClient) { } 

  getFeatures(){
    return this.Http.get('/api/features')
  }
}
