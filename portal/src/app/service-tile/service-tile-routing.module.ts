import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router'

import { ServiceTileComponent } from './component.service-tile';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path:'', component: ServiceTileComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ServiceTileRoutingModule {}