import {Component, OnInit} from '@angular/core';
import {Virtus} from "../data/virtus";
import {DEFAULT_OFFICE, Office, OFFICES} from "../data/offices";
import {SharedDataService} from "../shared-data.service";

@Component({
    selector: 'app-health-pietas',
    templateUrl: './health-pietas.component.html',
    styleUrls: ['./health-pietas.component.css']
})
export class HealthPietasComponent implements OnInit {

    isDisabled = false;

    virtus: Virtus;

    selectedOffice = DEFAULT_OFFICE;
    offices = OFFICES;

    constructor(private sharedDataService: SharedDataService) {
    }

    ngOnInit(): void {
        this.sharedDataService.currentHPVirtus.subscribe(data => this.virtus = data);
    }

    onOfficeChange(event: any): void{
        this.isDisabled = true;
        this.selectedOffice = this.offices.find((value => value.name === event.target.value));
    }

}
