import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  /**
   * Label do botão
   */
  @Input() label: string = '';

  @Input() type: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
