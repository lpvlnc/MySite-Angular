import { Component, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  projects: ProjectModel[] = [
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

  ngOnInit(): void {
  }

}
