/*----------------------------------------------------------------------------*/
/* Source File:   FUSELAGE.COMPONENT.SPEC.TS                                  */
/* Description:   Defines unit tests for component.                           */
/* Author:        Carlos Adolfo Ortiz Quirós (COQ)                            */
/* Date:          May.24/2018                                                 */
/* Last Modified: May.24/2018                                                 */
/* Version:       1.1                                                         */
/* Copyright (c), 2018 CSoftZ                                                 */
/*----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------
 History
 May.24/2018  COQ  File created.
 -----------------------------------------------------------------------------*/
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FuselageComponent } from "./fuselage.component";

describe("FuselageComponent", () => {
  let component: FuselageComponent;
  let fixture: ComponentFixture<FuselageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FuselageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuselageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
