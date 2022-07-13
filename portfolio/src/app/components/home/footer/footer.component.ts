import { Component, OnInit } from '@angular/core';
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
  
  constructor(private service: FooterService) { }

  ngOnInit(): void {
    this.socials = this.service.getSocials();
  }

}
