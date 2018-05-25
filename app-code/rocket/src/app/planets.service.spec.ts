/*----------------------------------------------------------------------------*/
/* Source File:   PLANETS.SERVICE.SPEC.TS                                     */
/* Description:   Service to retrieve the planets information (Tests).        */
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
import { TestBed, inject } from "@angular/core/testing";

import { PlanetsService } from "./planets.service";

describe("PlanetsService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanetsService]
    });
  });

  it(
    "should be created",
    inject([PlanetsService], (service: PlanetsService) => {
      expect(service).toBeTruthy();
    })
  );
});
