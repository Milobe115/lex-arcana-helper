import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { DisableArrowsDirective } from './disable-arrows.directive';
import { SnowflakeComponent } from './snowflake/snowflake.component';
import { HeaderComponent } from './header/header.component';
import { AgeSelectorComponent } from './age-selector/age-selector.component';
import { HealthPietasComponent } from './health-pietas/health-pietas.component';
import { VirtusGeneratorComponent } from './virtus-generator/virtus-generator.component';

@NgModule({
    declarations: [
        AppComponent,
        DisableArrowsDirective,
        SnowflakeComponent,
        HeaderComponent,
        AgeSelectorComponent,
        HealthPietasComponent,
        VirtusGeneratorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
