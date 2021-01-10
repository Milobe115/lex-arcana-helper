import {Injectable} from '@angular/core';
import {Virtus} from "./data/virtus";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HealthPietasService {

    constructor() {
    }

    public editDataDetails: Virtus = new Virtus(0, 0, 0, 0, 0, 0);
    public subject = new Subject<Virtus>();
    private dataSource = new BehaviorSubject(this.editDataDetails);
    currentData = this.dataSource.asObservable();

    sendData(message: Virtus): void {
        this.dataSource.next(message);
    }
}
