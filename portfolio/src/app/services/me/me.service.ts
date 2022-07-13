import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Me } from 'src/app/models/me';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  baseUrl = 'https://localhost:7087/';

  constructor(private http: HttpClient){

  }

  getMe() {
    return this.http.get(this.baseUrl + 'Me/Get');
  }
}
