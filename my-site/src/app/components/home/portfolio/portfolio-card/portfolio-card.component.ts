import { Component, Input, OnInit } from '@angular/core';
import { ProjectModel } from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {

  @Input() project: ProjectModel = {
    title: '[project title]',
    description: '[project description]'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
