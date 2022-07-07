import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  constructor(private service: ProjectService) { }

  projects: Project[] = [
    {
      id: 0,
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
