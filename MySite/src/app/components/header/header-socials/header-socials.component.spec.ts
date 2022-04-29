import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSocialsComponent } from './header-socials.component';

describe('HeaderSocialsComponent', () => {
  let component: HeaderSocialsComponent;
  let fixture: ComponentFixture<HeaderSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSocialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
