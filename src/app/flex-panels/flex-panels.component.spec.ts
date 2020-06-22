import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexPanelsComponent } from './flex-panels.component';

describe('FlexPanelsComponent', () => {
  let component: FlexPanelsComponent;
  let fixture: ComponentFixture<FlexPanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexPanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
