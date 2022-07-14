import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FooterInfo, Social } from 'src/app/models/footer';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor(private request: RequestService) { }

  getSocials() {
    return this.request.Request('get', 'Socials/Get');
  }
}
