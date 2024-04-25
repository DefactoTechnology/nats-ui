import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketComponent } from './websocket.component';

describe('WebsocketComponent', () => {
  let component: WebsocketComponent;
  let fixture: ComponentFixture<WebsocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsocketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
