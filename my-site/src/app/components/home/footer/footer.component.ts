import { Component, OnInit } from '@angular/core';
import { FooterInfo } from 'src/app/models/footer';
import { FooterService } from 'src/app/services/footer/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerInfo: FooterInfo = {
    tradingName: '[trading-name]',
    socials: [
      {
        name: '[name]',
        link: '[link]',
        icon: 'icon'
      }
    ]
  };
  
  constructor(private service: FooterService) { }

  ngOnInit(): void {
    this.footerInfo = this.service.getFooterInfo();
  }

}
