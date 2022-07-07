import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeIntroductionComponent } from './me-introduction.component';

describe('MeIntroductionComponent', () => {
  let component: MeIntroductionComponent;
  let fixture: ComponentFixture<MeIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeIntroductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
