import { Component, Input, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() icon: string = '[icon]';
  @Input() title: string = '[title]';
  @Input() content: string = '[content]';
  @Input() contactLink: string = 'contactLink';

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  copyContent(){
    this.clipboard.copy(this.content);
  }
}
