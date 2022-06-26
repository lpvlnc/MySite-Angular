import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from 'src/app/models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: ExperienceModel[] = [
    {
      technology: 'C#',
      level: 'Experienced',
      stack: 'B'
    },
    {
      technology: 'ASP.NET CORE',
      level: 'Experienced',
      stack: 'B'
    },
    {
      technology: 'Java',
      level: 'Experienced',
      stack: 'B'
    },
    {
      technology: 'Unity',
      level: 'Intermediate',
      stack: 'B'
    },
    {
      technology: 'HTML',
      level: 'Experienced',
      stack: 'F'
    },
    {
      technology: 'CSS',
      level: 'Intermediate',
      stack: 'F'
    },
    {
      technology: 'JavaScript',
      level: 'Intermediate',
      stack: 'F'
    },
    {
      technology: 'Angular',
      level: 'Intermediate',
      stack: 'F'
    }
  ];
  
  backendExperiences: ExperienceModel[] = [];

  frontendExperiences: ExperienceModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.backendExperiences = this.experiences.filter(x => x.stack == 'B');
    this.frontendExperiences = this.experiences.filter(x => x.stack == 'F');
  }

}
