import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FooterInfo, Social } from 'src/app/models/footer';
import { FooterService } from 'src/app/services/footer/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socials: Social[] = [
    {
      name: '[name]',
      link: '[link]',
      icon: 'icon'
    }
  ];
  
  constructor(private service: FooterService, private spinner: NgxSpinnerService) { 
  }

  ngOnInit(): void {
    this.spinner.show();
    this.service.getSocials().subscribe({
      next: (response: any) => {
        this.socials = response;
      },
      complete: () => {
        this.spinner.hide();
      }
    });
  }

}
