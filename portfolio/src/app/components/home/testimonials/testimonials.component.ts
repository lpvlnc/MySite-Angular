import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import SwiperCore, { Autoplay, Pagination, Navigation, SwiperOptions, EffectCoverflow } from "swiper";
import { Testimonial } from "src/app/models/testimonial";
import { TestimonialService } from "src/app/services/testimonial/testimonial.service";

SwiperCore.use([Autoplay, Navigation, Pagination, EffectCoverflow]);

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsComponent implements OnInit {

  public swiperConfig: SwiperOptions = {
    centeredSlides: true,
    autoplay: { delay: 4500, disableOnInteraction: true },
    pagination: { clickable: true },
    navigation: true,
    speed: 800
  };

  public testimonials: Testimonial[] = [
    {
      id: 0,
      profilePicture: '[picture]',
      name: '[client/coworker name]',
      relationship: '[relationship]',
      message: '[message]'
    }
  ];

  constructor(private service: TestimonialService) { }

  ngOnInit(): void {
    this.testimonials = this.service.getTestimonials();
  }
}
