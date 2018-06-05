/*----------------------------------------------------------------------------*/
/* Source File:   FUSELAGE.COMPONENT.TS                                       */
/* Description:   View component for fuselage of the Rocket                   */
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
import { Component, EventEmitter, OnInit } from '@angular/core'
import { MotorStates } from '../../app.types'
import { MessageService } from '../../message.service'

@Component({
  selector: "app-fuselage",
  templateUrl: "./fuselage.component.html",
  styleUrls: ["./fuselage.component.css"]
})
export class FuselageComponent implements OnInit {
  public igniteDelay: number
  public motorState: MotorStates
  public motorStateChange = new EventEmitter()

  constructor(private service: MessageService) {}

  ngOnInit() {
    this.igniteDelay = this.service.igniteDelay
    this.motorState = this.service.motorState
  }

  public listenMotor($event) {
    switch ($event.type) {
      case 'IGNITE':
        this.motorState = 'RUNNING'
        this.motorStateChange.emit(this.motorState)
        break;
    }
  }
}
