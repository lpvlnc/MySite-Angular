import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeSocialsComponent } from './me-socials.component';

describe('MeSocialsComponent', () => {
  let component: MeSocialsComponent;
  let fixture: ComponentFixture<MeSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeSocialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
