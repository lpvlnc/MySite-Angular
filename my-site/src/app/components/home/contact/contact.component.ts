import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: ContactModel = {
    email: '[email]',
    phone: '[phone]'
  }

  public phone: string = this.contact.phone;
  
  constructor() { }

  ngOnInit(): void {
    this.contact.whatsappLink = this.contact.phone ? 'https://api.whatsapp.com/send?phone=' + this.contact.phone : '';
    this.contact.emailLink = this.contact.email != '[email]' ? 'mailto:' + this.contact.email : '';
  }

  getPhone(): string {
    if (this.contact.phone == '[phone]')
      return '[phone]';
    return this.phone.substring(2).replace(/^(\d{2})(\d{1})(\d{4})(\d{4}).*/, '($1) $2 $3-$4');
  }
}
