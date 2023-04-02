import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormpageComponent } from './add-formpage.component';

describe('AddFormpageComponent', () => {
  let component: AddFormpageComponent;
  let fixture: ComponentFixture<AddFormpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
