import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private request: RequestService) { }

  getContacts() {
    return this.request.Request('get', 'Contacts/Get');
  }
}
