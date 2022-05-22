import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationBlogsComponent } from './consultation-blogs.component';

describe('ConsultationBlogsComponent', () => {
  let component: ConsultationBlogsComponent;
  let fixture: ComponentFixture<ConsultationBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
