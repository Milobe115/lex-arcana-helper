import { Injectable } from '@angular/core';
import {Virtus} from "./data/virtus";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  public ageVirtus: Virtus = new Virtus(0, 0, 0, 0, 0, 0);
  private ageVirtusSource = new BehaviorSubject(this.ageVirtus);
  currentAgeVirtus = this.ageVirtusSource.asObservable();

  public HPVirtus: Virtus = new Virtus(0, 0, 0, 0, 0, 0);
  private HPVirtusSource = new BehaviorSubject(this.HPVirtus);
  currentHPVirtus = this.HPVirtusSource.asObservable();

  sendAgeVirtus(message: Virtus): void {
    this.ageVirtusSource.next(message);
  }

  sendHPVirtus(message: Virtus): void {
    this.HPVirtusSource.next(message);
  }
}
