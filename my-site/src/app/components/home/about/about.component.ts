import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  about: About = {
    image: '',
    description: '',
    yearsOfExperience: 0,
    clients: 0,
    projects: 0
  }

  constructor(private service: AboutService) { }

  ngOnInit(): void {
    this.about = this.service.getAbout();
  }
}
