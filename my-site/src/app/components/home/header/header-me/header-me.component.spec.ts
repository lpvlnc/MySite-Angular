import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMeComponent } from './header-me.component';

describe('HeaderMeComponent', () => {
  let component: HeaderMeComponent;
  let fixture: ComponentFixture<HeaderMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
