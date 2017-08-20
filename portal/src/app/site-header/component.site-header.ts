import { Component, Input } from '@angular/core';
import { Site } from '../models/site';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.html',
  styleUrls: ['./site-header.css'],
})

export class SiteHeaderComponent {
  @Input() site: Site;
}
