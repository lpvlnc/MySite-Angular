import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolio-card-overlay',
  templateUrl: './portfolio-card-overlay.component.html',
  styleUrls: ['./portfolio-card-overlay.component.scss']
})
export class PortfolioCardOverlayComponent implements OnInit {

  @Input() project: Project = {
    title: '',
    description: '',
    github: '',
    build: '',
    image: ''
  };
  constructor() { }

  ngOnInit(): void {
  }

  disableGithub(): boolean {
    return !this.project.github;
  }

  disableBuild(): boolean {
    return !this.project.build;
  }
}
