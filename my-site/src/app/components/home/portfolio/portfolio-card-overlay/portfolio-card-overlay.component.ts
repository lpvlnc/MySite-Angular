import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolio-card-overlay',
  templateUrl: './portfolio-card-overlay.component.html',
  styleUrls: ['./portfolio-card-overlay.component.scss']
})
export class PortfolioCardOverlayComponent implements OnInit {

  @Input() project: ProjectModel = {
    title: '[project title]',
    description: '[project description]',
    github: '[project github]',
    build: '[project build]',
    image: '[project image]'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
