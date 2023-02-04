import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { DashboardRoutingModule } from './dashboard.router.module';
import { MainComponent } from './main/main.component';
import { WeightChartComponent } from './weight-chart/weight-chart.component';

@NgModule({
    imports: [DashboardRoutingModule, MaterialModule],
    declarations: [MainComponent, WeightChartComponent]
})
export class DashboardModule {}
