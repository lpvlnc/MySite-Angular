import { Component, OnInit } from '@angular/core';
import { HeaderModel } from 'src/app/models/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header: HeaderModel = {
    name: 'my name',
    description: 'desc',
    cv: 'aaa',
    picture: '../../../assets/me/me.png'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
