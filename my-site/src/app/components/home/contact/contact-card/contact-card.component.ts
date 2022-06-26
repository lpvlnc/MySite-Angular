import { Component, Input, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { ContactModel } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: ContactModel = {
    icon: '[icon]',
    title: '[title]',
    content: '[content]',
    link: '[link]'
  };

  @Input() phone: boolean = false;

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
    if (this.phone)
      this.contact.content = this.formatPhone(this.contact.content);
    
  }

  copyContent(){
    this.clipboard.copy(this.contact.content);
  }

  formatPhone(phone: string): string {
    return phone.substring(2).replace(/^(\d{2})(\d{1})(\d{4})(\d{4}).*/, '($1) $2 $3-$4');
  }
}
