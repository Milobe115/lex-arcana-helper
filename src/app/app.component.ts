import {Component} from '@angular/core';
import {Province, PROVINCES} from './province';

// noinspection DuplicatedCode
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    // Virtutes
    sensibilitas = 0;
    ingenium = 0;
    ratio = 0;
    auctoritas = 0;
    vigor = 0;
    coordinatio = 0;

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
    selectedProvince: Province = this.provinces[0];
    title = 'lex-arcana';

    recalculateAllPeritiae(): void{
        this.bello = this.vigorBello + this.auctoritasBello + this.selectedProvince.bello;
        this.corpore = this.coordinatioCorpore + this.vigorCorpore + this.selectedProvince.corpore;
        this.natura = this.sensibilitasNatura + this.coordinatioNatura + this.selectedProvince.natura;
        this.magia = this.sensibilitasMagia + this.ingeniumMagia + this.selectedProvince.magia;
        this.scientia = this.ratioScientia + this.ingeniumScientia + this.selectedProvince.scientia;
        this.societate = this.ratioSocietate + this.auctoritasSocietate + this.selectedProvince.societate;
    }

    onSelectProvince(event: any): void{
        this.selectedProvince = this.provinces.find((value => value.name === event.target.value));
        this.recalculateAllPeritiae();
    }

    onInterChange(variableName: string, event: any): void{
        switch (variableName){
            case 'SN':
                this.sensibilitasNatura = +event.target.value;
                this.sensibilitasMagia = this.sensibilitas - this.sensibilitasNatura;
                break;
            case 'SM':
                this.sensibilitasMagia = +event.target.value;
                this.sensibilitasNatura = this.sensibilitas - this.sensibilitasMagia;
                break;
            case 'IM':
                this.ingeniumMagia = +event.target.value;
                this.ingeniumScientia = this.ingenium - this.ingeniumMagia;
                break;
            case 'ISc':
                this.ingeniumScientia = +event.target.value;
                this.ingeniumMagia = this.ingenium - this.ingeniumScientia;
                break;
            case 'RSc':
                this.ratioScientia = +event.target.value;
                this.ratioSocietate = this.ratio - this.ratioScientia;
                break;
            case 'RSo':
                this.ratioSocietate = +event.target.value;
                this.ratioSocietate = this.ratio - this.ratioScientia;
                break;
            case 'ASo':
                this.auctoritasSocietate = +event.target.value;
                this.auctoritasBello = this.auctoritas - this.auctoritasSocietate;
                break;
            case 'AB':
                this.auctoritasBello = +event.target.value;
                this.auctoritasSocietate = this.auctoritas - this.auctoritasBello;
                break;
            case 'VB':
                this.vigorBello = +event.target.value;
                this.vigorCorpore = this.vigor - this.vigorBello;
                break;
            case 'VC':
                this.vigorCorpore = +event.target.value;
                this.vigorBello = this.vigor - this.vigorCorpore;
                break;
            case 'CC':
                this.coordinatioCorpore = +event.target.value;
                this.coordinatioNatura = this.coordinatio - this.coordinatioCorpore;
                break;
            case 'CN':
                this.coordinatioNatura = +event.target.value;
                this.coordinatioCorpore = this.coordinatio - this.coordinatioNatura;
                break;
        }
        this.recalculateAllPeritiae();
    }

    onVirtusChange(variableName: string, event: any): void{
        switch (variableName){
            case 'sensibilitas':
                this.sensibilitas = +event.target.value;
                break;
            case 'ingenium':
                this.ingenium = +event.target.value;
                break;
            case 'ratio':
                this.ratio = +event.target.value;
                break;
            case 'auctoritas':
                this.auctoritas = +event.target.value;
                break;
            case 'vigor':
                this.vigor = +event.target.value;
                break;
            case 'coordinatio':
                this.coordinatio = +event.target.value;
                break;
        }
        this.recalculateAllPeritiae();
    }
}
