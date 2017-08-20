import { Component, Input } from '@angular/core';
import { SiteService } from '../services/site-service';
import { Day } from '../models/day';
import { Site } from '../models/site';

@Component({
  selector: 'day-row-item',
  templateUrl: './day-row-item.html',
  styleUrls: ['./day-row-item.css'],
})


export class DayRowItemComponent {
  @Input() day: Day;

  sites = []

  constructor(private _siteService: SiteService) {
    this._siteService.apiUrl = 'https://77os3o0poc.execute-api.eu-central-1.amazonaws.com/dev'     
    this.getSites();
  }

  private getSites(): void {
    this._siteService
      .GetAll()
      .subscribe((data: Site[]) => this.sites = data ,
        error => {console.log(error); this.sites = Day[0] },
        () => console.log('Get all sites complete: ' + this.sites.length ) );
  }

}
