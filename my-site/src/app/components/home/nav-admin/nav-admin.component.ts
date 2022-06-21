import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.scss']
})
export class NavAdminComponent implements OnInit {

  active: boolean = false;
  public name: string = 'Leonardo Valença';

  constructor() { }

  ngOnInit(): void {
  }

  toggle(): boolean {
    this.active = !this.active;
    return this.active;
  }
}
