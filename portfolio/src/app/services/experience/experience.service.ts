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
        id: 1,
        technology: 'C#',
        level: 'Experienced',
        stack: 'B'
      },
      {
        id: 2,
        technology: 'ASP.NET CORE',
        level: 'Experienced',
        stack: 'B'
      },
      {
        id: 3,
        technology: 'Java',
        level: 'Experienced',
        stack: 'B'
      },
      {
        id: 3,
        technology: 'Unity',
        level: 'Intermediate',
        stack: 'B'
      },
      {
        id: 4,
        technology: 'HTML',
        level: 'Experienced',
        stack: 'F'
      },
      {
        id: 5,
        technology: 'CSS',
        level: 'Intermediate',
        stack: 'F'
      },
      {
        id: 6,
        technology: 'JavaScript',
        level: 'Intermediate',
        stack: 'F'
      },
      {
        id: 7,
        technology: 'Angular',
        level: 'Intermediate',
        stack: 'F'
      }
    ];
    return experiences;
  }
}
