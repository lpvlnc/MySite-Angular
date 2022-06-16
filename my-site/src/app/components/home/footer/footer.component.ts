import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/models/me';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socials: Social[] = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/lpvalenca/',
      icon: 'fa-brands fa-linkedin'
    },
    {
      name: 'Github',
      link: 'https://github.com/lpvlnc/',
      icon: 'fa-brands fa-github-square'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
