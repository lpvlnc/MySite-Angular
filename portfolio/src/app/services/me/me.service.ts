import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Me } from 'src/app/models/me';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  constructor(private request: RequestService) { }

  getMe() {
    return this.request.Request('get', 'Home/GetMe');
  }
}
