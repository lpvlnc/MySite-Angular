import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-me-introduction',
  templateUrl: './me-introduction.component.html',
  styleUrls: ['./me-introduction.component.scss']
})
export class MeIntroductionComponent implements OnInit {

  @Input() name: string = '[name]';
  @Input() description: string = '[description]';

  constructor() { }

  ngOnInit(): void {
  }

}
