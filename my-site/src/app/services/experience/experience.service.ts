import { Injectable } from '@angular/core';
import { Experience } from 'src/app/models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperiences(): Experience[] {
    let experiences: Experience[] = [
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
    return experiences;
  }
}
