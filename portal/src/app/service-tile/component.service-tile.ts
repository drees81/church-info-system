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
}
