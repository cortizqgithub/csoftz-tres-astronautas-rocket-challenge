/*----------------------------------------------------------------------------*/
/* Source File:   COCKPIT.COMPONENT.TS                                        */
/* Description:   View component to present the Cockpit part of the Rocket    */
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
import { Component, OnInit } from "@angular/core";

import { MessageService } from "../message.service";
import { Subscription, timer } from "rxjs";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  private igniteCounter: number;
  private subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.igniteCounter = 10;
    this.messageService.listen().subscribe((m: any) => {
      console.log(m);
      this.onIgniteClick(m);
    });
  }
  
  onIgniteClick(event) {
    console.log("Fire onIgniteClick: ", event);
    this.igniteCounter = 10;
    if (this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
    this.createSubscription();
  }

  createSubscription(): void {
    let tr = timer(1000, 1000);
    this.subscription = tr.subscribe(t => {
      if (this.igniteCounter <= 0) {
        this.igniteCounter = 0;
      } else {
        this.igniteCounter--;
      }
    });
  }
  ngOnInit() {}
}
