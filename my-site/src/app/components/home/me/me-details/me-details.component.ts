import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-me-details',
  templateUrl: './me-details.component.html',
  styleUrls: ['./me-details.component.scss']
})
export class MeDetailsComponent implements OnInit {

  @Input() picture: string = '';
  @Input() cvDownload: string = '[cv download]'

  constructor() { }

  ngOnInit(): void {
  }

}
