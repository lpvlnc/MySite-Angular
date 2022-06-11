import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.scss']
})
export class HeaderButtonsComponent implements OnInit {

  @Input() cvDownload: string = '[cv download]'

  constructor() { }

  ngOnInit(): void {
  }

}
