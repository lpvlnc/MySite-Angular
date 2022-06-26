import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-me-details',
  templateUrl: './me-details.component.html',
  styleUrls: ['./me-details.component.scss']
})
export class MeDetailsComponent implements OnInit {

  @Input() picture: string = '';
  @Input() cv: string = ''

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  downloadCV(): void {
    this.toastr.info('Not implemented yet.', 'Download CV action');
  }
}
