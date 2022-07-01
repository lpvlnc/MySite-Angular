import { Injectable } from '@angular/core';
import { Testimonial } from 'src/app/models/testimonial';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor() { }

  getTestimonials() {
    let testimonials: Testimonial[] = [
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
    return testimonials;
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
