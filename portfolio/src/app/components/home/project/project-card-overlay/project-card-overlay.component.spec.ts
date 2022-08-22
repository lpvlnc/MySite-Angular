import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardOverlayComponent } from './project-card-overlay.component';

describe('ProjectCardOverlayComponent', () => {
  let component: ProjectCardOverlayComponent;
  let fixture: ComponentFixture<ProjectCardOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCardOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCardOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
