import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { InputTextModule, ButtonModule, DataTableModule, DialogModule, DropdownModule, CheckboxModule } from 'primeng/primeng';

import { AppComponent } from './app.component';

import { DayRowItemComponent } from './day-row-item/component.day-row-item';
import { SiteHeaderComponent } from './site-header/component.site-header';
import { ServiceTileComponent } from './service-tile/component.service-tile';
import { ServiceTileRoutingModule} from './service-tile/service-tile-routing.module';

import { SearchPipe } from './pipe.search';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, HttpModule, Angular2FontawesomeModule, DialogModule, ButtonModule, DropdownModule, CheckboxModule
  ],
  declarations: [
    AppComponent, SearchPipe, DayRowItemComponent, SiteHeaderComponent, ServiceTileComponent
  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule {}
