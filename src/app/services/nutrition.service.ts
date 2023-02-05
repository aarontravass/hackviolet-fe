import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { API_URL } from "../constants";
import { LoginBody } from "../homepage/homepage.component";
import { LogoutBody } from "../logout/logout.component";
import { ResponseModel } from "../models/promiseresult";
import { RegistrationBody } from "../registration/registration.component";

@Injectable({
    providedIn: 'root'
})
export class NutritionService {
    constructor(private readonly http: HttpClient) {

    }

    private handleError(error: HttpErrorResponse) {
        return throwError(error);
    }

    searchRecipe(search_term: string): Observable<ResponseModel> {
        const params = new HttpParams().set('recipe_name', search_term);
        return this.http.get<ResponseModel>(API_URL + 'recipe/search', { params }).pipe(catchError(this.handleError));
    }

    fetchCalories(): Observable<ResponseModel> {
        return this.http.get<ResponseModel>(API_URL + '/calorie/history/fetch').pipe(catchError(this.handleError));
    }


}
