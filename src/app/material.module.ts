import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegistrationComponent } from './registration/registration.component';
import { ServiceModule } from './services/services.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { LogoutComponent } from './logout/logout.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashboardModule } from './dashboard/dashboard.module';

const modules = [
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatInputModule,
    MatFormFieldModule,

    MatButtonModule,

    MatSidenavModule,

    MatToolbarModule,
    MatListModule,
    MatProgressSpinnerModule
];
@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule {}
