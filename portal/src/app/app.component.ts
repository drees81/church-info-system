import { Component, OnInit } from '@angular/core';
import { ServiceDaysService } from './services/service-days-service';
import { SiteService } from './services/site-service';
import { Configuration } from '../app/app.constants';
import { Day } from '../app/models/day';
import { Site } from '../app/models/site';

@Component({
  selector: 'app-root',
  providers: [SiteService, ServiceDaysService, Configuration],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Church Info System';
  subtitle = 'Service Planner'

  days = []
  sites = []

  constructor(private _siteService: SiteService ,private _serviceDaysService: ServiceDaysService, private _configuration: Configuration) {
    this._serviceDaysService.apiUrl = 'https://77os3o0poc.execute-api.eu-central-1.amazonaws.com/dev'     
    this._siteService.apiUrl = 'https://77os3o0poc.execute-api.eu-central-1.amazonaws.com/dev'     
    this.getServiceDays();
    this.getSites();
  }

  ngOnInit() {
    // this.getServiceDays();
  }

  private getServiceDays(): void {
    this._serviceDaysService
      .GetAll()
      .subscribe((data: Day[]) => this.days = data ,
        error => {console.log(error); this.days = Day[0] },
        () => console.log('Get all days complete: ' + this.days.length ) );
  }

  private getSites(): void {
    this._siteService
      .GetAll()
      .subscribe((data: Site[]) => this.sites = data ,
        error => {console.log(error); this.sites = Day[0] },
        () => console.log('Get all sites complete: ' + this.sites.length ) );
  }

}
