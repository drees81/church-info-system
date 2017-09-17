import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SiteService } from '../services/site-service';
import { Day } from '../models/day';
import { Site } from '../models/site';
import { Service } from '../models/service';

@Component({
  selector: 'day-row-item',
  templateUrl: './day-row-item.html',
  styleUrls: ['./day-row-item.css'],
})


export class DayRowItemComponent implements OnChanges {
  @Input() day: Day
  @Input() sites: Site[]
  @Input() services : Service[]

  filteredServices
  service

  ngOnChanges(changes: SimpleChanges) {
    if (changes['services'] && this.services.length >0) {
        this.filteredServices = this.services.filter( (service) => {return service.isodate==this.day.date})
        this.service = this.filteredServices[0]
    }
  }
  
}
