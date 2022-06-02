import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCardOverlayComponent } from './portfolio-card-overlay.component';

describe('PortfolioCardOverlayComponent', () => {
  let component: PortfolioCardOverlayComponent;
  let fixture: ComponentFixture<PortfolioCardOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioCardOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCardOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
