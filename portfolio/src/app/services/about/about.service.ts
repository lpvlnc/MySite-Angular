import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { About } from '../../models/about';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private request: RequestService) { }

  getAbout() {
    return this.request.Request('get', 'Home/GetAbout');
  }
}
