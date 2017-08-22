import { Component, Input } from '@angular/core';
import { Day } from '../models/day';
import { Site } from '../models/site';

@Component({
  selector: 'service-tile',
  templateUrl: './service-tile.html',
  styleUrls: ['./service-tile.css'],
})

export class ServiceTileComponent {
  @Input() day: Day;
  @Input() site :Site;

  display: boolean = false;

  addService(event, day, site):void {
    console.log("add Service " + day.date + " " + site.name)
    this.display = true
  }

  save() {
    this.display = false
  }

  cancel() {
    this.display = false
  }
}
