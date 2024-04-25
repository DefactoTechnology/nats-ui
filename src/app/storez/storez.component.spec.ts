import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorezComponent } from './storez.component';

describe('StorezComponent', () => {
  let component: StorezComponent;
  let fixture: ComponentFixture<StorezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorezComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
