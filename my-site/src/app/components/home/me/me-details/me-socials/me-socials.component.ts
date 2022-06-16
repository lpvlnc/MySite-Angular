import { Component, OnInit } from '@angular/core';
import { Social } from 'src/app/models/me';

@Component({
  selector: 'app-me-socials',
  templateUrl: './me-socials.component.html',
  styleUrls: ['./me-socials.component.scss']
})
export class MeSocialsComponent implements OnInit {

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
