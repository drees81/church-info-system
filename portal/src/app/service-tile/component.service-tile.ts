import { Component, Input } from '@angular/core'
import { Day } from '../models/day'
import { Site } from '../models/site'
import { Service } from '../models/service'
import {SelectItem} from 'primeng/primeng'

@Component({
  selector: 'service-tile',
  templateUrl: './service-tile.html',
  styleUrls: ['./service-tile.css'],
})

export class ServiceTileComponent {
  @Input() day: Day;
  @Input() site :Site;

  display: boolean = false;

  preachers: SelectItem[];
  times: SelectItem[];
  musicians: SelectItem[];
  helpers: SelectItem[];

  service: Service;

  constructor() {
    this.preachers = []
    this.preachers.push({label:'Andreas Folkers', value:'AF'})
    this.preachers.push({label:'Christian Havemann', value:'AF'})

    this.times = [] 
    this.times.push({label:'09:30', value:'09:30'})
    this.times.push({label:'11:00', value:'11:00'})

     this.service = new Service();
    // this.service.date = this.day.date
    this.service.startTime = '11:00'
  }
  

  addService(event, day, site):void {
    console.log("add Service " + day.date + " " + site.name)
    this.display = true
  }

  save() {
    this.display = false
    console.log(this.service.startTime)
  }

  cancel() {
    this.display = false
  }
}
