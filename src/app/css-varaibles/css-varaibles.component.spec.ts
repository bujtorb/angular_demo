import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssVaraiblesComponent } from './css-varaibles.component';

describe('CssVaraiblesComponent', () => {
  let component: CssVaraiblesComponent;
  let fixture: ComponentFixture<CssVaraiblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssVaraiblesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssVaraiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
