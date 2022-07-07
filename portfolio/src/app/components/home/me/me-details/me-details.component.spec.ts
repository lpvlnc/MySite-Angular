import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeDetailsComponent } from './me-details.component';

describe('MeDetailsComponent', () => {
  let component: MeDetailsComponent;
  let fixture: ComponentFixture<MeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
