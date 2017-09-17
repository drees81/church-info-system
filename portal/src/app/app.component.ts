import { Component, OnInit } from '@angular/core';
import { ServiceDaysService } from './services/service-days-service';
import { SiteService } from './services/site-service';
import { ServiceService } from './services/service-service';
import { Configuration } from '../app/app.constants';
import { Day } from '../app/models/day';
import { Site } from '../app/models/site';
import { Service } from '../app/models/service';

@Component({
  selector: 'app-root',
  providers: [SiteService, ServiceDaysService, ServiceService, Configuration],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Church Info System';
  subtitle = 'Service Planner'

  days = []
  sites = []
  services = []

  constructor(private _siteService: SiteService ,private _serviceDaysService: ServiceDaysService, private _serviceService: ServiceService, private _configuration: Configuration) {
    this._serviceDaysService.apiUrl = 'https://77os3o0poc.execute-api.eu-central-1.amazonaws.com/dev'     
    this._siteService.apiUrl = 'https://77os3o0poc.execute-api.eu-central-1.amazonaws.com/dev'
    this._serviceService.apiUrl = 'https://otz7rf17oi.execute-api.eu-central-1.amazonaws.com/dev'
    this.getServiceDays();
    this.getSites();
    this.getServices();
  }

  ngOnInit() {
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

  private getServices(): void {
    this._serviceService
      .GetAll()
      .subscribe((data: Service[]) => this.services = data,
        error => {console.log(error); this.services = Service[0] },
        () => console.log('Get all services complete: ' + this.services.length ) );
  }

}
