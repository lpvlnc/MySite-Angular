import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project: Project = {
    id: 0,
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
