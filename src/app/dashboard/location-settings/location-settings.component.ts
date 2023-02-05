import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Stores } from '../../models/kroger';
import { KrogerService } from '../../services/kroger.service';

export class Locationform {
    zipcode: string;
    radius: string;
}

export class LocationSaveForm {
    location_id: string;
    user_guid: string | null;
}

@Component({
    selector: 'app-location-settings',
    templateUrl: './location-settings.component.html',
    styleUrls: ['./location-settings.component.css']
})
export class LocationSettingsComponent implements OnInit {
    radius_values = ['1', '3', '5', '10'];
    constructor(private readonly kroger: KrogerService) { }
    displayedColumns = ['name', 'address', 'phone', 'open']
    body = new Locationform();
    save_body = new LocationSaveForm();

    store_list: Stores[] = [];

    ngOnInit(): void {
        this.save_body.user_guid = sessionStorage.getItem('user_guid');

    }

    async getLocations(): Promise<void> {
        await this.kroger.findStores(this.body).toPromise().then(res => {
            if (res.status) {
                this.store_list = res.data.locations;
            }
        }).catch((error: HttpErrorResponse) => {

        })
    }

    async save(location_id: string): Promise<void> {
        this.save_body.location_id = location_id;
        await this.kroger.saveLocation(this.save_body).toPromise().then(res => {
            if (res.status) {

            }
        }).catch((error: HttpErrorResponse) => {

        })
    }
}
