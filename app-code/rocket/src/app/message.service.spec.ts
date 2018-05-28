/*----------------------------------------------------------------------------*/
/* Source File:   MESSAGE.SERVICE.SPEC.TS                                     */
/* Description:   Service to communicate events between components. (Tests)   */
/* Author:        Carlos Adolfo Ortiz Quirós (COQ)                            */
/* Date:          May.27/2018                                                 */
/* Last Modified: May.27/2018                                                 */
/* Version:       1.1                                                         */
/* Copyright (c), 2018 CSoftZ                                                 */
/*----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------
 History
 May.27/2018  COQ  File created.
 -----------------------------------------------------------------------------*/
 import { TestBed, inject } from "@angular/core/testing";

import { MessageService } from "./message.service";

describe("MessageService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it(
    "should be created",
    inject([MessageService], (service: MessageService) => {
      expect(service).toBeTruthy();
    })
  );
});
