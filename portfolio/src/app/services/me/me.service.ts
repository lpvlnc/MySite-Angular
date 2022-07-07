import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Me } from 'src/app/models/me';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  constructor(private http: HttpClient) { }

  getMeInfo(): Me {
    let me: Me = {
      name: 'Leonardo Valença',
      role: 'Fullstack Developer',
      cv: 'aaa',
      pictureMe: '../../../assets/me/me.png'
    }
    return me;
  }
}
