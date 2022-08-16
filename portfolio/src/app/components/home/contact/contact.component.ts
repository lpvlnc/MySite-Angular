import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/services/contact/contact.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

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

  public form = this.fb.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });
  
  constructor(private service: ContactService,
              private toastr: ToastrService, 
              private spinner: NgxSpinnerService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.spinner.show();
    this.service.getContacts().subscribe({
      next: (response: any) => {
        this.contacts = response;
      },
      complete: () => {
        this.spinner.hide();
      }
    });
  }

  sendMessage(): void {
    if (this.form.valid)
      this.toastr.info('Not implemented yet.', 'Send message action');
  }

  isPhone(content: string): boolean {
    return content === 'Whatsapp' || content === 'Phone';
  }
}
