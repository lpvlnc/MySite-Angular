import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { ExperienceService } from 'src/app/services/experience/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [
    {
      technology: '[technology]',
      level: '[level]',
      stack: '[stack]'
    }
  ];
  
  backendExperiences: Experience[] = [];

  frontendExperiences: Experience[] = [];

  constructor(private service: ExperienceService) { }

  ngOnInit(): void {
    this.experiences = this.service.getExperiences();
    this.backendExperiences = this.experiences.filter(x => x.stack == 'B');
    this.frontendExperiences = this.experiences.filter(x => x.stack == 'F');
  }

}
