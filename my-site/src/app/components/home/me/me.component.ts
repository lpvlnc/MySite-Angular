import { Component, OnInit } from '@angular/core';
import { MeModel } from 'src/app/models/me';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  me: MeModel = {
    name: 'my name',
    description: 'desc',
    cv: 'aaa',
    picture: '../../../assets/me/me.png'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
