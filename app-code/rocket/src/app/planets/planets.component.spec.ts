/*----------------------------------------------------------------------------*/
/* Source File:   PLANETS.SPEC.COMPONENT.TS                                   */
/* Description:   View compomponent to view planets from Rocket (tests)       */
/* Author:        Carlos Adolfo Ortiz Quirós (COQ)                            */
/* Date:          May.25/2018                                                 */
/* Last Modified: May.25/2018                                                 */
/* Version:       1.1                                                         */
/* Copyright (c), 2018 CSoftZ                                                 */
/*----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------
 History
 May.25/2018  COQ  File created.
 -----------------------------------------------------------------------------*/
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlanetsComponent } from "./planets.component";

describe("PlanetsComponent", () => {
  let component: PlanetsComponent;
  let fixture: ComponentFixture<PlanetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlanetsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
