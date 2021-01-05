import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { DisableArrowsDirective } from './disable-arrows.directive';
import { SnowflakeComponent } from './snowflake/snowflake.component';

@NgModule({
    declarations: [
        AppComponent,
        DisableArrowsDirective,
        SnowflakeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
