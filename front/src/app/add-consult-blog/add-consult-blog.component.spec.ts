import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultBlogComponent } from './add-consult-blog.component';

describe('AddConsultBlogComponent', () => {
  let component: AddConsultBlogComponent;
  let fixture: ComponentFixture<AddConsultBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsultBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsultBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
