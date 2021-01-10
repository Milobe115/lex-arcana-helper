import {Component, OnInit} from '@angular/core';
import {Age, AGES, DEFAULT_AGE} from "../data/ages";
import {Virtus} from "../data/virtus";
import {SharedVirtusService} from "../shared-virtus.service";

@Component({
    selector: 'app-age-selector',
    templateUrl: './age-selector.component.html',
    styleUrls: ['./age-selector.component.css']
})
export class AgeSelectorComponent implements OnInit {

    isDisabled = false;
    selectedAge: Age = DEFAULT_AGE;
    ages: Age[] = AGES;

    // Virtutes
    virtus: Virtus;

    constructor(private sharedVirtusService: SharedVirtusService) {
      this.virtus = new Virtus(0, 0, 0, 0, 0, 0);
    }

    ngOnInit(): void {
        this.sharedVirtusService.currentData.subscribe( data => this.virtus = data);
    }

    onSelectAge(event: any): void {
        this.isDisabled = true;
        this.selectedAge = this.ages.find((value => value.desc === event.target.value));
    }
}
