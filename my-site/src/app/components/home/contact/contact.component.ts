import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contact';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: ContactModel[] = [
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
  
  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    this.toastr.info('Not implemented yet.', 'Send message action');
  }

  isPhone(content: string): boolean {
    return content === 'Whatsapp' || content === 'Phone';
  }
}
