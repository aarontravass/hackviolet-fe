import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { DashboardRoutingModule } from './dashboard.router.module';
import { MainComponent } from './main/main.component';
import { WeightChartComponent } from './weight-chart/weight-chart.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { RecipeViewerComponent } from './recipe-viewer/recipe-viewer.component';
import { LocationSettingsComponent } from './location-settings/location-settings.component';
import { KrogerSearchComponent } from './kroger/kroger-search/kroger-search.component';
import { KrogerProductViewComponent } from './kroger/kroger-product-view/kroger-product-view.component';

@NgModule({
    imports: [DashboardRoutingModule, MaterialModule, FormsModule, CommonModule],
    declarations: [MainComponent, WeightChartComponent, RecipesComponent, DashboardComponent, RecipeViewerComponent, LocationSettingsComponent, KrogerSearchComponent, KrogerProductViewComponent]
})
export class DashboardModule {}
