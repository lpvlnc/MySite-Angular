import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-introduction',
  templateUrl: './header-introduction.component.html',
  styleUrls: ['./header-introduction.component.scss']
})
export class HeaderIntroductionComponent implements OnInit {

  @Input() name: string = '[name]';
  @Input() description: string = '[description]';

  constructor() { }

  ngOnInit(): void {
  }

}
