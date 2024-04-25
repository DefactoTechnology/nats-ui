import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerzComponent } from './serverz.component';

describe('ServerzComponent', () => {
  let component: ServerzComponent;
  let fixture: ComponentFixture<ServerzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
