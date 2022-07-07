import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-me-introduction',
  templateUrl: './me-introduction.component.html',
  styleUrls: ['./me-introduction.component.scss']
})
export class MeIntroductionComponent implements OnInit {

  @Input() name: string = '';
  @Input() role: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
