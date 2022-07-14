import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private request: RequestService) { }

  getExperiences() {
    return this.request.Request('get', 'Experiences/Get');
  }
}
