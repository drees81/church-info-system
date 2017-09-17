import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
  @Input() day: Day
  @Input() site: Site
  @Input() services: Service[]

  filteredServices = []
  service

  ngOnChanges(changes: SimpleChanges) {
    if (changes['services'] && this.services && this.services.length >0) {
        this.filteredServices = this.services.filter( (service) => {return service.site==this.site.name})
        if (this.filteredServices.length>0) {
          this.service = this.filteredServices[0]
        }
    }
  }
}
