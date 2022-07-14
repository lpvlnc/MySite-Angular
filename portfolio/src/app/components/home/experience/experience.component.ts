import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
      id: 0,
      technology: '[technology]',
      level: '[level]',
      stack: '[stack]'
    }
  ];
  
  backendExperiences: Experience[] = [];

  frontendExperiences: Experience[] = [];

  constructor(private service: ExperienceService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.service.getExperiences().subscribe({
      next: (response: any) => {
        this.experiences = response;
      },
      complete: () => {
        this.backendExperiences = this.experiences.filter(x => x.stack == 'B');
        this.frontendExperiences = this.experiences.filter(x => x.stack == 'F');
        this.spinner.hide();
      }
    });
  }

}
