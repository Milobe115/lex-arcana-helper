import { Component } from '@angular/core';
import {Province, PROVINCES} from './province';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    provinces: Province[] = PROVINCES;
    selectedProvince: Province = this.provinces[0];
    title = 'lex-arcana';

    onSelectProvince(event: any): void{
        this.selectedProvince = this.provinces.find((value => value.name === event.target.value));
        console.log(this.selectedProvince);
    }

}
