import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { LoginBody } from "../homepage/homepage.component";
import { LogoutBody } from "../logout/logout.component";
import { ResponseModel } from "../models/promiseresult";
import { RegistrationBody } from "../registration/registration.component";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    constructor(private readonly http:HttpClient){

    }

    private handleError(error: HttpErrorResponse) {
        return throwError(error);
    }




    login(body: LoginBody):Observable<ResponseModel>{
        return this.http.post<ResponseModel>('', body).pipe(catchError(this.handleError));
    }

    register(body: RegistrationBody):Observable<ResponseModel>{
        return this.http.post<ResponseModel>('', body).pipe(catchError(this.handleError));
    }

    logout(body: LogoutBody):Observable<ResponseModel>{
        return this.http.post<ResponseModel>('', body).pipe(catchError(this.handleError));
    }
}