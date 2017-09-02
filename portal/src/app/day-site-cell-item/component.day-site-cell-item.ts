import { Component, Input } from '@angular/core';
import { SiteService } from '../services/site-service';
import { Day } from '../models/day';
import { Site } from '../models/site';
import { Service } from '../models/service';

@Component({
  selector: 'day-site-cell-item',
  templateUrl: './day-site-cell-item.html',
  styleUrls: ['./day-site-cell-item.css'],
})


export class DaySiteCellItemComponent {
  @Input() day: Day;
  @Input() site: Site;

  constructor() {
  }

}
