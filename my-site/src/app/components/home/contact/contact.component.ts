import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [
    {
      icon: 'fa-solid fa-circle',
      title: '[title]',
      content: '[content]',
      link: '[link]'
    }
  ];
  
  constructor(private service: ContactService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.contacts = this.service.getContacts();
  }

  sendMessage(): void {
    this.toastr.info('Not implemented yet.', 'Send message action');
  }

  isPhone(content: string): boolean {
    return content === 'Whatsapp' || content === 'Phone';
  }
}
