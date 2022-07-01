import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/portfolio';

@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit {

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

}
