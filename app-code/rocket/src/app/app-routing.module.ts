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

import { FuselageComponent } from "./fuselage/fuselage.component";

const routes: Routes = [{ path: "", component: FuselageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
