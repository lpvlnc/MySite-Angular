import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from 'src/app/models/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  backendExperiences: ExperienceModel[] = [
    {
      technology: 'C#',
      level: 'Experienced'
    },
    {
      technology: 'ASP.NET CORE',
      level: 'Experienced'
    },
    {
      technology: 'Java',
      level: 'Experienced'
    },
    {
      technology: 'Unity',
      level: 'Intermediate'
    }
  ];

  frontendExperiences: ExperienceModel[] = [
    {
      technology: 'HTML',
      level: 'Experienced'
    },
    {
      technology: 'CSS',
      level: 'Intermediate'
    },
    {
      technology: 'JavaScript',
      level: 'Intermediate'
    },
    {
      technology: 'Angular',
      level: 'Intermediate'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
