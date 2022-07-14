import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private request: RequestService) { }
  
  getMe() {
    return this.request.Request('get', 'Projects/Get');
  }
}
