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
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { MessageService } from "../message.service";

@Component({
  selector: "app-motor",
  templateUrl: "./motor.component.html",
  styleUrls: ["./motor.component.css"]
})
export class MotorComponent implements OnInit {
  @Output() onIgnite = new EventEmitter();

  constructor(private messageService: MessageService) {}

  igniteClick(): void {
    this.messageService.filter("Register click Ignite");
  }

  ngOnInit() {}
}
