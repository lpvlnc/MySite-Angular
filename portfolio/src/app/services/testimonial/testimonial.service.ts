import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Testimonial } from 'src/app/models/testimonial';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private request: RequestService) { }

  getTestimonials() {
    return this.request.Request('get', 'Testimonials/Get');
  }
}
