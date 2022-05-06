import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIntroductionComponent } from './header-introduction.component';

describe('HeaderIntroductionComponent', () => {
  let component: HeaderIntroductionComponent;
  let fixture: ComponentFixture<HeaderIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
