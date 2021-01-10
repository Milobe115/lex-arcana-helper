import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { DisableArrowsDirective } from './disable-arrows.directive';
import { SnowflakeComponent } from './snowflake/snowflake.component';
import { HeaderComponent } from './header/header.component';
import { AgeSelectorComponent } from './age-selector/age-selector.component';

@NgModule({
    declarations: [
        AppComponent,
        DisableArrowsDirective,
        SnowflakeComponent,
        HeaderComponent,
        AgeSelectorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
