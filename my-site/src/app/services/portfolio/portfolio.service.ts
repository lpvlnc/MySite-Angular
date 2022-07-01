import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getProjects(): Project[] {
    let projects: Project[] = [
      {
        title: '[project title]',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum nesciunt saepe laborum hic! Commodi eius impedit eum doloremque omnis, repellendus totam. Architecto iure omnis, hic quaerat delectus iusto voluptas veniam.',
        github: 'https://github.com/lpvlnc',
        build: '',
        image: '../../../../../assets/portfolio/portfolio-card-placeholder.png'
      },
      {
        title: '[project title]',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum nesciunt saepe laborum hic! Commodi eius impedit eum doloremque omnis, repellendus totam. Architecto iure omnis, hic quaerat delectus iusto voluptas veniam.',
        github: 'https://github.com/lpvlnc',
        build: '',
        image: '../../../../assets/me/me-about.jpg'
      },
      {
        title: '[project title]',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum nesciunt saepe laborum hic! Commodi eius impedit eum doloremque omnis, repellendus totam. Architecto iure omnis, hic quaerat delectus iusto voluptas veniam.',
        github: 'https://github.com/lpvlnc',
        build: '',
        image: '../../../../../assets/portfolio/portfolio-card-placeholder.png'
      },
      {
        title: '[project title]',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum nesciunt saepe laborum hic! Commodi eius impedit eum doloremque omnis, repellendus totam. Architecto iure omnis, hic quaerat delectus iusto voluptas veniam.',
        github: 'https://github.com/lpvlnc',
        build: '',
        image: '../../../../assets/me/me-about.jpg'
      }
    ];
    return projects;
  }
}
