import { Component, Input, OnInit } from '@angular/core';
import { TestimonialModel } from 'src/app/models/testimonial';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss']
})
export class TestimonialCardComponent implements OnInit {

  @Input() testimonial: TestimonialModel = {
    profilePic: '',
    name: '',
    relationship: '',
    message: ''
  };
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.testimonial.name);
  }

}
