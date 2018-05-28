/*----------------------------------------------------------------------------*/
/* Source File:   PLANETS.SERVICE.SPEC.TS                                     */
/* Description:   Service to retrieve the planets information.                */
/* Author:        Carlos Adolfo Ortiz Quirós (COQ)                            */
/* Date:          May.25/2018                                                 */
/* Last Modified: May.27/2018                                                 */
/* Version:       1.1                                                         */
/* Copyright (c), 2018 CSoftZ                                                 */
/*----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------
 History
 May.25/2018  COQ  File created.
 -----------------------------------------------------------------------------*/
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PlanetsService {
  constructor(private http: HttpClient) {}

  getPlanetInfo(): Observable<PlanetInfo> {
    return this.http.get<PlanetInfo>(
      "http://demo0761779.mockable.io/angularspaceship/planets"
    );
  }
}
