/*----------------------------------------------------------------------------*/
/* Source File:   APP-ROUTING.MODULE.TS                                       */
/* Description:   Used to define application routing (page navigation)        */
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
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { FuselageComponent } from "./containers/fuselage/fuselage.component";
import { PlanetsComponent } from "./planets/planets.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "inicio", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "control", component: FuselageComponent},
  { path: "planets/:id", component:PlanetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
