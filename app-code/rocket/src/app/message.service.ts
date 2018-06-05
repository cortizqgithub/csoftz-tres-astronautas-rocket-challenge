/*----------------------------------------------------------------------------*/
/* Source File:   MESSAGE.SERVICE.TS                                          */
/* Description:   Service to communicate events between components.           */
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
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { MotorStates } from './app.types'

@Injectable({
  providedIn: "root"
})
export class MessageService {


  public igniteDelay = 20;
  public motorState: MotorStates = 'STOPPED'

  private listeners = new Subject<any>();

  listen(): Observable<any> {
    return this.listeners.asObservable();
  }

  filter(filterBy: string) {
    this.listeners.next(filterBy);
  }

  constructor() {}
}
