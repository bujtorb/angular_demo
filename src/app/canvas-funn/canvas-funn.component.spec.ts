import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasFunnComponent } from './canvas-funn.component';

describe('CanvasFunnComponent', () => {
  let component: CanvasFunnComponent;
  let fixture: ComponentFixture<CanvasFunnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasFunnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasFunnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
