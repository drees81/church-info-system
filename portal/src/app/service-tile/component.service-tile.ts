import { Component, Input, OnInit,OnChanges, SimpleChanges } from '@angular/core'
import { Day } from '../models/day'
import { Site } from '../models/site'
import { Service } from '../models/service'
import { SelectItem } from 'primeng/primeng'
import { ServiceService } from '../services/service-service';

@Component({
  selector: 'service-tile',
  templateUrl: './service-tile.html',
  providers: [ServiceService],
  styleUrls: ['./service-tile.css'],
})

export class ServiceTileComponent implements OnInit, OnChanges {
  @Input() day: Day;
  @Input() site :Site;
  @Input() service: Service;
  
  display: boolean = false;

  preachers: SelectItem[];
  times: SelectItem[];
  musicians: SelectItem[];
  helpers: SelectItem[];


  ngOnInit() {
    if (this.service === undefined) { 
      this.service = new Service();
      this.service.site = this.site.name
      this.service.isodate = this.day.date
      this.service.startTime = this.site.standardServiceStartTime
    }
    //console.log('ServiceTileComponent ' +JSON.stringify(this.service))
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['service'] && this.service) {
      console.log("ServiceTileComponent change " + JSON.stringify(this.service))
    }
  }

  constructor(private _serviceService: ServiceService) {
    this._serviceService.apiUrl = 'https://otz7rf17oi.execute-api.eu-central-1.amazonaws.com/dev'

    this.preachers = []
    this.preachers.push({label:'Andreas Folkers', value:'AF'})
    this.preachers.push({label:'Christian Havemann', value:'AF'})

    this.times = [] 
    this.times.push({label:'09:30', value:'09:30'})
    this.times.push({label:'11:00', value:'11:00'})
  }
  
  addService(event, day, site):void {
    console.log("add Service " + day.date + " " + site.name)
    this.display = true
  }

  save() {
    this.display = false
    if ( this.service.id === undefined ) {
      this._serviceService.CreateNew(this.service).subscribe(
        (data: Service) => { this.service.id = data.id } ,
        error => {console.log(error) },
        () => console.log('Service created ' + this.service.id) );
    } else {
      console.log("saving changes to service " + this.service.id)
    }
  }

  cancel() {
    this.display = false
  }
}
