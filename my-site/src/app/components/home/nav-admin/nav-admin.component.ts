import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.scss']
})
export class NavAdminComponent implements OnInit {

  active: boolean = false;
  public name: string = 'Leonardo Valença';

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  toggle(): boolean {
    this.active = !this.active;
    return this.active;
  }

  openDashboard(): void {
    this.toastr.info("Dashboard doesn't implemented yet.", 'Dashboard action');
  }

  openNotifications(): void {
    this.toastr.info("Notifications doesn't implemented yet.", 'Notifications action');
  }

  openSettings(): void {
    this.toastr.info("Settings doesn't implemented yet.", 'Settings action');
  }

  logout(): void {
    this.toastr.info("logout doesn't implemented yet.", 'logout action');
  }
}
