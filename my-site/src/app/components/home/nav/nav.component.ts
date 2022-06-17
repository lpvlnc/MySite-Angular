import { Component, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public linkActiveOptions: IsActiveMatchOptions= {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact'
  }

  public hide: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  hideNavbar(): void {
    this.hide = !this.hide;
  }
}
