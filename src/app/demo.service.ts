import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }

  request(endpoint, payload) {
    return this.http.post(endpoint, payload);
  }

  requestGet(endpoint, payload) {
    return this.http.get(endpoint, payload);
  }
}
