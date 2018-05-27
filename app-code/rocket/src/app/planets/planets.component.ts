/*----------------------------------------------------------------------------*/
/* Source File:   PLANETS.COMPONENT.TS                                        */
/* Description:   View compomponent to view planets from Rocket               */
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
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription, timer, Observable } from "rxjs";

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.css"]
})
export class PlanetsComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {}
  ngOnDestroy(): void {}
}
