import {Component, OnInit} from '@angular/core';
import {Age, AGES, DEFAULT_AGE} from "../data/ages";
import {Virtus} from "../data/virtus";
import {SharedDataService} from "../shared-data.service";

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

    constructor(private sharedDataService: SharedDataService) {
        this.virtus = new Virtus(0, 0, 0, 0, 0, 0);
    }

    ngOnInit(): void {
        this.sharedDataService.currentAgeVirtus.subscribe(data => {
            this.virtus = data;
            this.sharedDataService.sendHPVirtus(
                new Virtus(this.virtus.sensibilitas + this.selectedAge.sensibilitas,
                    this.virtus.ingenium + this.selectedAge.ingenium,
                    this.virtus.ratio + this.selectedAge.ratio,
                    this.virtus.auctoritas + this.selectedAge.auctoritas,
                    this.virtus.vigor + this.selectedAge.vigor,
                    this.virtus.coordinatio + this.selectedAge.coordinatio));
        });
    }

    onSelectAge(event: any): void {
        this.isDisabled = true;
        this.selectedAge = this.ages.find((value => value.desc === event.target.value));
        this.sharedDataService.sendHPVirtus(
            new Virtus(this.virtus.sensibilitas + this.selectedAge.sensibilitas,
                this.virtus.ingenium + this.selectedAge.ingenium,
                this.virtus.ratio + this.selectedAge.ratio,
                this.virtus.auctoritas + this.selectedAge.auctoritas,
                this.virtus.vigor + this.selectedAge.vigor,
                this.virtus.coordinatio + this.selectedAge.coordinatio));
    }
}
