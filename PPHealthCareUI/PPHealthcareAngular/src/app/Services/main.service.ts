import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }
  
  GetAllUser() {
    return this.http.get('http://localhost:9001/user/get');
  }

}
