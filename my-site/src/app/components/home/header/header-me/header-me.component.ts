import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-me',
  templateUrl: './header-me.component.html',
  styleUrls: ['./header-me.component.scss']
})
export class HeaderMeComponent implements OnInit {

  @Input() picture: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
