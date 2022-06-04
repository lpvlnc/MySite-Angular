import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, Pagination, Navigation, SwiperOptions, EffectCoverflow } from "swiper";

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
    autoplay: { delay: 4500, disableOnInteraction: false },
    pagination: { clickable: true, currentClass : 'custom-pagination' },
    navigation: true
  };

  constructor() { }

  ngOnInit(): void {
  }
}
