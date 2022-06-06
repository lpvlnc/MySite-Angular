import { Component, OnInit, ViewEncapsulation, ViewChild } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, Pagination, Navigation, SwiperOptions, EffectCoverflow } from "swiper";
import { TestimonialModel } from "src/app/models/testimonial";

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

  public testimonials: TestimonialModel[] = [
    {
      profilePic: '../../../../../assets/testimonial-profile-pic/avatar1.jpg',
      name: '[client/coworker name]',
      relationship: this.getRelationship(),
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis deserunt odio exercitationem a nam excepturi aliquam provident reiciendis asperiores modi, nesciunt velit inventore impedit unde? Dignissimos corrupti facere voluptates!'
    },
    {
      profilePic: '../../../../../assets/testimonial-profile-pic/avatar2.jpg',
      name: '[client/coworker name]',
      relationship: this.getRelationship(),
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis deserunt odio exercitationem a nam excepturi aliquam provident reiciendis asperiores modi, nesciunt velit inventore impedit unde? Dignissimos corrupti facere voluptates!'
    },
    {
      profilePic: '../../../../../assets/testimonial-profile-pic/avatar3.jpg',
      name: '[client/coworker name]',
      relationship: this.getRelationship(),
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis deserunt odio exercitationem a nam excepturi aliquam provident reiciendis asperiores modi, nesciunt velit inventore impedit unde? Dignissimos corrupti facere voluptates!'
    },
    {
      profilePic: '../../../../../assets/testimonial-profile-pic/avatar4.jpg',
      name: '[client/coworker name]',
      relationship: this.getRelationship(),
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis deserunt odio exercitationem a nam excepturi aliquam provident reiciendis asperiores modi, nesciunt velit inventore impedit unde? Dignissimos corrupti facere voluptates!'
    },
    {
      profilePic: '../../../../../assets/testimonial-profile-pic/avatar1.jpg',
      name: '[client/coworker name]',
      relationship: this.getRelationship(),
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis deserunt odio exercitationem a nam excepturi aliquam provident reiciendis asperiores modi, nesciunt velit inventore impedit unde? Dignissimos corrupti facere voluptates!'
    },
    {
      profilePic: '../../../../../assets/testimonial-profile-pic/avatar2.jpg',
      name: '[client/coworker name]',
      relationship: this.getRelationship(),
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veritatis deserunt odio exercitationem a nam excepturi aliquam provident reiciendis asperiores modi, nesciunt velit inventore impedit unde? Dignissimos corrupti facere voluptates!'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getRelationship(): string {
    let num = Math.floor(Math.random() * (3 + 1));
    switch(num){
      case 0:
        return 'client';
      case 1:
        return 'coworker';
      case 2: 
        return 'client & coworker';
      default:
        return 'client & coworker';
    }
  }
}
