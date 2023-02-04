import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomepageComponent
    },
    {
        path: 'register',
        component: RegistrationComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'dashboard',
        loadChildren: () =>
            import('./dashboard/dashboard.module').then(
                (module) => module.DashboardModule
            ),

    },
    {
        path:'**',
        component: HomepageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
