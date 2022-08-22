import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project-card-overlay',
  templateUrl: './project-card-overlay.component.html',
  styleUrls: ['./project-card-overlay.component.scss']
})
export class ProjectCardOverlayComponent implements OnInit {

  @Input() project: Project = {
    id: 0,
    title: '',
    description: '',
    github: '',
    build: '',
    image: ''
  };

  detailLink: string = '';
  
  constructor() { }

  ngOnInit(): void {
    this.detailLink = 'http://localhost:4200/project-detail/' + this.project.id;
  }

  disableGithub(): boolean {
    return !this.project.github;
  }

  disableBuild(): boolean {
    return !this.project.build;
  }
}
