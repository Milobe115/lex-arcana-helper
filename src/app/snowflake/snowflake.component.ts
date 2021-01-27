import {Component, OnInit} from '@angular/core';
import {DEFAULT_PROVINCE, Province, PROVINCES} from "../data/province";
import {Virtus} from "../data/virtus";
import {SharedDataService} from "../shared-data.service";

@Component({
    selector: 'app-snowflake',
    templateUrl: './snowflake.component.html',
    styleUrls: ['./snowflake.component.css']
})
export class SnowflakeComponent implements OnInit {

    // Logic variables
    isDisabled = false;

    // Virtutes
    virtus: Virtus;

    // Intermediate scores
    sensibilitasNatura = 0;
    sensibilitasMagia = 0;
    ingeniumMagia = 0;
    ingeniumScientia = 0;
    ratioScientia = 0;
    ratioSocietate = 0;
    auctoritasSocietate = 0;
    auctoritasBello = 0;
    vigorBello = 0;
    vigorCorpore = 0;
    coordinatioCorpore = 0;
    coordinatioNatura = 0;

    // Peritiae
    bello = 0;
    corpore = 0;
    natura = 0;
    magia = 0;
    scientia = 0;
    societate = 0;

    provinces: Province[] = PROVINCES;
    selectedProvince: Province = DEFAULT_PROVINCE;

    constructor(private sharedDataService: SharedDataService) {
        this.virtus = new Virtus(0, 0, 0, 0, 0, 0);
    }

    ngOnInit(): void {
    }

    recalculateAllPeritiae(): void {
        this.bello = this.vigorBello + this.auctoritasBello + this.selectedProvince.bello;
        this.corpore = this.coordinatioCorpore + this.vigorCorpore + this.selectedProvince.corpore;
        this.natura = this.sensibilitasNatura + this.coordinatioNatura + this.selectedProvince.natura;
        this.magia = this.sensibilitasMagia + this.ingeniumMagia + this.selectedProvince.magia;
        this.scientia = this.ratioScientia + this.ingeniumScientia + this.selectedProvince.scientia;
        this.societate = this.ratioSocietate + this.auctoritasSocietate + this.selectedProvince.societate;
    }

    onSelectProvince(event: any): void {
        this.isDisabled = true;
        this.selectedProvince = this.provinces.find((value => value.name === event.target.value));
        this.recalculateAllPeritiae();
    }

    onInterChange(variableName: string, event: any): void {
        switch (variableName) {
            case 'SN':
                this.sensibilitasNatura = +event.target.value;
                this.sensibilitasMagia = this.virtus.sensibilitas - this.sensibilitasNatura;
                break;
            case 'SM':
                this.sensibilitasMagia = +event.target.value;
                this.sensibilitasNatura = this.virtus.sensibilitas - this.sensibilitasMagia;
                break;
            case 'IM':
                this.ingeniumMagia = +event.target.value;
                this.ingeniumScientia = this.virtus.ingenium - this.ingeniumMagia;
                break;
            case 'ISc':
                this.ingeniumScientia = +event.target.value;
                this.ingeniumMagia = this.virtus.ingenium - this.ingeniumScientia;
                break;
            case 'RSc':
                this.ratioScientia = +event.target.value;
                this.ratioSocietate = this.virtus.ratio - this.ratioScientia;
                break;
            case 'RSo':
                this.ratioSocietate = +event.target.value;
                this.ratioSocietate = this.virtus.ratio - this.ratioScientia;
                break;
            case 'ASo':
                this.auctoritasSocietate = +event.target.value;
                this.auctoritasBello = this.virtus.auctoritas - this.auctoritasSocietate;
                break;
            case 'AB':
                this.auctoritasBello = +event.target.value;
                this.auctoritasSocietate = this.virtus.auctoritas - this.auctoritasBello;
                break;
            case 'VB':
                this.vigorBello = +event.target.value;
                this.vigorCorpore = this.virtus.vigor - this.vigorBello;
                break;
            case 'VC':
                this.vigorCorpore = +event.target.value;
                this.vigorBello = this.virtus.vigor - this.vigorCorpore;
                break;
            case 'CC':
                this.coordinatioCorpore = +event.target.value;
                this.coordinatioNatura = this.virtus.coordinatio - this.coordinatioCorpore;
                break;
            case 'CN':
                this.coordinatioNatura = +event.target.value;
                this.coordinatioCorpore = this.virtus.coordinatio - this.coordinatioNatura;
                break;
        }
        this.recalculateAllPeritiae();
    }

    onVirtusChange(variableName: string, event: any): void {
        switch (variableName) {
            case 'sensibilitas':
                this.virtus.sensibilitas = +event.target.value;
                break;
            case 'ingenium':
                this.virtus.ingenium = +event.target.value;
                break;
            case 'ratio':
                this.virtus.ratio = +event.target.value;
                break;
            case 'auctoritas':
                this.virtus.auctoritas = +event.target.value;
                break;
            case 'vigor':
                this.virtus.vigor = +event.target.value;
                break;
            case 'coordinatio':
                this.virtus.coordinatio = +event.target.value;
                break;
        }
        this.recalculateAllPeritiae();
        this.sharedDataService.sendAgeVirtus(this.virtus);
    }
}
