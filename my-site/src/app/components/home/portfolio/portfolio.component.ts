import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/portfolio';
import { PortfolioService } from 'src/app/services/portfolio/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private service: PortfolioService) { }

  projects: Project[] = [
    {
      title: '[title]',
      description: '[description]',
      github: '[githubLink]',
      build: '[buildLink',
      image: '[image]'
    }
  ];

  ngOnInit(): void {
    this.projects = this.service.getProjects();
  }

}
