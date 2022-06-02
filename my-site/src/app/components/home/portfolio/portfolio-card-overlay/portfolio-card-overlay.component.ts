import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-card-overlay',
  templateUrl: './portfolio-card-overlay.component.html',
  styleUrls: ['./portfolio-card-overlay.component.scss']
})
export class PortfolioCardOverlayComponent implements OnInit {

  githubLink: string = 'https://github.com/lpvlnc'
  @Input() title: string = '';
  @Input() description: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
