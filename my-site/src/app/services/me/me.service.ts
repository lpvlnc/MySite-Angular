import { Injectable } from '@angular/core';
import { Me } from 'src/app/models/me';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  constructor() { }

  getMeInfo(): Me {
    let me: Me = {
      name: 'Leonardo Valença',
      role: 'Fullstack Developer',
      cv: 'aaa',
      picture: '../../../assets/me/me.png'
    }
    return me;
  }
}
