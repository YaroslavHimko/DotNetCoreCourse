import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  constructor(private Http: HttpClient) { } 

  getMakes() {
    return this.Http.get('/api/makes')
  }
}
