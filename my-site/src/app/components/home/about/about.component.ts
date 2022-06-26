import { Component, OnInit } from '@angular/core';
import { AboutModel } from 'src/app/models/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  about: AboutModel = {
    image: '../../../../assets/me/me-about.jpg',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro reprehenderit exercitationem dolor, pariatur quasi incidunt quisquam nihil alias at fugit, nostrum iste corporis voluptate itaque excepturi labore dolorum delectus accusamus.',
    yearsOfExperience: 1,
    clients: 0,
    projects: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
