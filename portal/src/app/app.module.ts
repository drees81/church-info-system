import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { DayRowItemComponent } from './day-row-item/component.day-row-item';
import { SiteHeaderComponent } from './site-header/component.site-header';
import { ServiceTileComponent } from './service-tile/component.service-tile';

import { SearchPipe } from './pipe.search';

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  declarations: [
    AppComponent, SearchPipe, DayRowItemComponent, SiteHeaderComponent, ServiceTileComponent
  ],
  bootstrap: [
    AppComponent
  ],
})

export class AppModule {}
