import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuselageComponent } from './fuselage.component';

describe('FuselageComponent', () => {
  let component: FuselageComponent;
  let fixture: ComponentFixture<FuselageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuselageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuselageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
