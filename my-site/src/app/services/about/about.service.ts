import { Injectable } from '@angular/core';
import { About } from '../../models/about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  getAbout() : About {
    let about: About = {
      image: '../../../../assets/me/me-about.jpg',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit exercitationem dolor, pariatur quasi incidunt quisquam nihil alias at fugit, nostrum iste corporis voluptate itaque excepturi labore dolorum delectus accusamus.',
      yearsOfExperience: 1,
      clients: 0,
      projects: 0
    }
    return about;
  }
}
