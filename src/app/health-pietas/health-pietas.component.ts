import {Component, OnInit} from '@angular/core';
import {HealthPietasService} from "../health-pietas.service";
import {Virtus} from "../data/virtus";
import {DEFAULT_OFFICE, Office, OFFICES} from "../data/offices";

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

    constructor(private healthPietasService: HealthPietasService) {
    }

    ngOnInit(): void {
        this.healthPietasService.currentData.subscribe(data => this.virtus = data);
    }

    onOfficeChange(event: any): void{
        this.isDisabled = true;
        this.selectedOffice = this.offices.find((value => value.name === event.target.value));
    }

}
