import {Component} from '@angular/core';
import {DEFAULT_PROVINCE, Province, PROVINCES} from './data/province';

// noinspection DuplicatedCode
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    view = 0;

    onPrevClick(): void{
        this.view--;
    }

    onNextClick(): void{
        this.view++;
    }
}
