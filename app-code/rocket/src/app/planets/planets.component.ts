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

import { PlanetsService } from "../planets.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.css"]
})
export class PlanetsComponent implements OnInit, OnDestroy {
  private planetName: string;
  private planetDegree: number;
  private planetImg: string;

  private assignPlanetInfoFor(planet: String, planetInfo: PlanetInfo) {
    this.planetName = "";
    this.planetDegree = 0;
    this.planetImg = "";
    switch (planet) {
      case "mercurio": {
        this.planetName = "Mercurio";
        this.planetDegree = +planetInfo.images.mercurio.degrees;
        this.planetImg = planetInfo.images.mercurio.img;
        break;
      }
      case "venus": {
        this.planetName = "Venus";
        this.planetDegree = +planetInfo.images.venus.degrees;
        this.planetImg = planetInfo.images.venus.img;
        break;
      }
      case "tierra": {
        this.planetName = "Tierra";
        this.planetDegree = +planetInfo.images.tierra.degrees;
        this.planetImg = planetInfo.images.tierra.img;
        break;
      }
      case "marte": {
        this.planetName = "Marte";
        this.planetDegree = +planetInfo.images.marte.degrees;
        this.planetImg = planetInfo.images.marte.img;
        break;
      }
      case "jupiter": {
        this.planetName = "Jupiter";
        this.planetDegree = +planetInfo.images.jupiter.degrees;
        this.planetImg = planetInfo.images.jupiter.img;
        break;
      }
      case "saturno": {
        this.planetName = "Saturno";
        this.planetDegree = +planetInfo.images.saturno.degrees;
        this.planetImg = planetInfo.images.saturno.img;
        break;
      }
      case "urano": {
        this.planetName = "Urano";
        this.planetDegree = +planetInfo.images.urano.degrees;
        this.planetImg = planetInfo.images.urano.img;
        break;
      }
      case "neptuno": {
        this.planetName = "Neptuno";
        this.planetDegree = +planetInfo.images.neptuno.degrees;
        this.planetImg = planetInfo.images.neptuno.img;
        break;
      }
      case "pluton": {
        this.planetName = "Plutón";
        this.planetDegree = +planetInfo.images.pluton.degrees;
        this.planetImg = planetInfo.images.pluton.img;
        break;
      }
      default: {
        this.planetName = "NO VALIDO";
        this.planetDegree = 0;
        this.planetImg = "";
      }
    }
  }

  constructor(
    private planetService: PlanetsService,
    private route: ActivatedRoute
  ) {
    let planetId: String;
    this.route.params.subscribe(res => (planetId = res.id));
    this.planetService.getPlanetInfo().subscribe(data => {
      this.assignPlanetInfoFor(planetId, data);
    });
  }

  ngOnInit() {}
  ngOnDestroy(): void {}
}
