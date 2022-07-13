import { Injectable } from '@angular/core';
import { FooterInfo, Social } from 'src/app/models/footer';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

  getSocials(): Social[] {
    let socials: Social[] = [
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
    return socials;
  }
}
