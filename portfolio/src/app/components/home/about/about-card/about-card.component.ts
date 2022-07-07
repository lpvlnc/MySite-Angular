import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent implements OnInit {

  @Input() icon: string = 'fa-solid fa-circle';
  @Input() title: string = '';
  @Input() description: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
