/*----------------------------------------------------------------------------*/
/* Source File:   APP.MODULE.TS                                               */
/* Description:   Used to bootstrap an Angular Application                    */
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
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FuselageComponent } from "./fuselage/fuselage.component";
import { MotorComponent } from "./motor/motor.component";
import { CockpitComponent } from "./cockpit/cockpit.component";

@NgModule({
  declarations: [
    AppComponent,
    FuselageComponent,
    MotorComponent,
    CockpitComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
