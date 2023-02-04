import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { DashboardRoutingModule } from './dashboard.router.module';
import { MainComponent } from './main/main.component';

@NgModule({
    imports: [DashboardRoutingModule, MaterialModule],
    declarations: [MainComponent]
})
export class DashboardModule {}
