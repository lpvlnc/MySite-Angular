import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Me } from 'src/app/models/me';
import { MeService } from 'src/app/services/me/me.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  me: Me = {
    name: '[name]',
    role: '[role]',
    cv: '[cv]',
    pictureMe: '[image]'
  }

  constructor(private service: MeService, private spinner: NgxSpinnerService) { 
  }

  ngOnInit(): void {
    this.spinner.show();
    this.service.getMe().subscribe({
      next: (response: any) => {
        this.me = response;
      },
      complete: () => {
        this.spinner.hide();
      }
    });
  }
}
