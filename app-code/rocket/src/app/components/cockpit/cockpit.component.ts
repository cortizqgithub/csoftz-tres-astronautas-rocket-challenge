/*----------------------------------------------------------------------------*/
/* Source File:   COCKPIT.COMPONENT.TS                                        */
/* Description:   View component to present the Cockpit part of the Rocket    */
/* Author:        Carlos Adolfo Ortiz Quirós (COQ)                            */
/* Date:          May.24/2018                                                 */
/* Last Modified: May.28/2018                                                 */
/* Version:       1.1                                                         */
/* Copyright (c), 2018 CSoftZ                                                 */
/*----------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------
 History
 May.24/2018  COQ  File created.
 -----------------------------------------------------------------------------*/
import { Component, OnDestroy, OnInit, Input, EventEmitter } from '@angular/core'
import { take, tap } from 'rxjs/operators'
import { Subscription, timer } from "rxjs";
import { MotorStates } from '../../app.types'

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnDestroy, OnInit {
  public igniteCounter: number = 3;
  private subscriptions: Subscription[] = [];

  @Input() igniteDelay: number
  @Input() motorState: MotorStates
  @Input() motorStateChange = new EventEmitter()

  ngOnInit() {
    this.reset()
    this.subscribe()
  }

  reset() {
    this.igniteCounter = this.igniteDelay
  }

  subscribe() {
    this.motorStateChange
      .subscribe(event => {
        switch (event) {
          case 'RUNNING':
            this.onIgniteClick(event)
            break;
        }
      })
  }

  onIgniteClick(event) {
    console.log("Fire onIgniteClick: ", event);
    this.createSubscription();
  }

  createSubscription(): void {
    const sub = this.getTimer()
      .subscribe(() => this.igniteCounter--)

    this.subscriptions.push(sub)
  }

  getTimer() {
    return timer(1000, 1000)
      .pipe(
        take(this.igniteCounter),
        tap(count => console.log('count', count))
      );
  }

  ngOnDestroy() {
    this.unSubscribe()
  }

  unSubscribe() {
    this.subscriptions.forEach( (sub, i) => {
      console.log('unsubscribe', i)
      sub.unsubscribe()
    })
  }


}
