import {
    HttpClient,
    HttpErrorResponse,
    HttpParams
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL } from '../constants';
import { Locationform, LocationSaveForm } from '../dashboard/location-settings/location-settings.component';
import { ResponseModel } from '../models/promiseresult';
import { RegistrationBody } from '../registration/registration.component';

@Injectable({
    providedIn: 'root'
})
export class KrogerService {
    constructor(private readonly http: HttpClient) {}

    private handleError(error: HttpErrorResponse) {
        return throwError(error);
    }

    findStores(body: Locationform): Observable<ResponseModel> {
        const params = new HttpParams()
            .set('zip_code', body.zip_code)
            .set('radius', body.radius);
        return this.http
            .get<ResponseModel>(API_URL + 'kroger/locations', { params })
            .pipe(catchError(this.handleError));
    }

    saveLocation(body: LocationSaveForm): Observable<ResponseModel> {
        return this.http
            .post<ResponseModel>(API_URL + 'kroger/location/save', body)
            .pipe(catchError(this.handleError));
    }

    search(user_guid: string, search_term: string): Observable<ResponseModel> {
        const params = new HttpParams()
            .set('user_guid', user_guid)
            .set('search_term', search_term);
        return this.http
            .get<ResponseModel>(API_URL + 'kroger/product/search', { params })
            .pipe(catchError(this.handleError));
    }

    findProductInformation(
        user_guid: string,
        product_id: string
    ): Observable<ResponseModel> {
        const params = new HttpParams()
            .set('user_guid', user_guid)
            .set('product_id', product_id);
        return this.http
            .get<ResponseModel>(API_URL + 'kroger/product/fetch', { params })
            .pipe(catchError(this.handleError));
    }
}
