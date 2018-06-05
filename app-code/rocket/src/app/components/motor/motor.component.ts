/*----------------------------------------------------------------------------*/
/* Source File:   MOTOR.COMPONENT.TS                                          */
/* Description:   View compomponent for the Motor of the Rocket               */
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
import { Component, Output, EventEmitter, Input } from '@angular/core'
import { MotorStates } from '../../app.types'

@Component({
  selector: "app-motor",
  templateUrl: "./motor.component.html",
  styleUrls: ["./motor.component.css"]
})
export class MotorComponent {
  @Output() onIgnite = new EventEmitter();
  @Input() motorState: MotorStates

  igniteClick(): void {
    this.onIgnite.emit({ type: 'IGNITE' })
  }

  public isRunning() {
    return this.motorState === 'RUNNING'
  }
}
