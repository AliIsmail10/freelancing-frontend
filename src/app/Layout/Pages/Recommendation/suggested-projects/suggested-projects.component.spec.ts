import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedProjectsComponent } from './suggested-projects.component';

describe('SuggestedProjectsComponent', () => {
  let component: SuggestedProjectsComponent;
  let fixture: ComponentFixture<SuggestedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestedProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
