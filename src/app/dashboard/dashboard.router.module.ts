import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { KrogerSearchComponent } from './kroger/kroger-search/kroger-search.component';
import { LocationSettingsComponent } from './location-settings/location-settings.component';
import { MainComponent } from './main/main.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path:'',
                component: MainComponent
            },
            {
                path: 'recipes',
                component: RecipesComponent,
                
            },
            {
                path: 'settings',
                component: LocationSettingsComponent,
            },
            {
                path: 'kroger',
                component: KrogerSearchComponent
            }
        ]
    },
    {
        path: '**',
        component: MainComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
