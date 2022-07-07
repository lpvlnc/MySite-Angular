import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Project[] {
    let projects: Project[] = [
      {
        id: 1,
        title: '[project title]',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum nesciunt saepe laborum hic! Commodi eius impedit eum doloremque omnis, repellendus totam. Architecto iure omnis, hic quaerat delectus iusto voluptas veniam.',
        github: 'https://github.com/lpvlnc',
        build: '',
        image: '../../../../../assets/portfolio/portfolio-card-placeholder.png'
      },
      {
        id: 2,
        title: '[project title]',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum nesciunt saepe laborum hic! Commodi eius impedit eum doloremque omnis, repellendus totam. Architecto iure omnis, hic quaerat delectus iusto voluptas veniam.',
        github: 'https://github.com/lpvlnc',
        build: '',
        image: '../../../../assets/me/me-about.jpg'
      },
      {
        id: 3,
        title: '[project title]',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum nesciunt saepe laborum hic! Commodi eius impedit eum doloremque omnis, repellendus totam. Architecto iure omnis, hic quaerat delectus iusto voluptas veniam.',
        github: 'https://github.com/lpvlnc',
        build: '',
        image: '../../../../../assets/portfolio/portfolio-card-placeholder.png'
      },
      {
        id: 4,
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
