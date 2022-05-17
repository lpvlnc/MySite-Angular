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
      experience: 'Experienced'
    },
    {
      technology: 'ASP.NET CORE',
      experience: 'Experienced'
    },
    {
      technology: 'Java',
      experience: 'Experienced'
    },
    {
      technology: 'Unity',
      experience: 'Intermediate'
    }
  ];

  frontendExperiences: ExperienceModel[] = [
    {
      technology: 'HTML',
      experience: 'Experienced'
    },
    {
      technology: 'CSS',
      experience: 'Intermediate'
    },
    {
      technology: 'JavaScript',
      experience: 'Intermediate'
    },
    {
      technology: 'typeScript',
      experience: 'Intermediate'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
