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
  @Input() day: Day
  @Input() sites: Site[]
}
