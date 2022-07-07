import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Contact[] {
    let contacts: Contact[] = [
      {
        icon: 'fa-solid fa-envelope',
        title: 'Email',
        content: 'lpvalenca@hotmail.com',
        link: 'mailto:lpvalenca@hotmail.com'
      },
      {
        icon: 'fa-brands fa-whatsapp',
        title: 'Whatsapp',
        content: '5551993822341',
        link: 'https://api.whatsapp.com/send?phone=5551993822341'
      }
    ];
    return contacts;
  }
}
