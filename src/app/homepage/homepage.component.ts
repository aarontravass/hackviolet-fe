import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export class LoginBody {
    email: string = '';
    password: string = '';
}

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    constructor(private readonly authService: AuthService, private readonly router: Router) { }

    ngOnInit(): void { }

    body = new LoginBody();
    async submit() {
        await this.authService.login(this.body).toPromise().then(res => {
            if(res.status){
                sessionStorage.setItem('user_guid', res.data.user_guid);
                sessionStorage.setItem('auth_token', res.data.auth_token);
                this.router.navigate(['/dashboard']);

            }
        }).catch((error: HttpErrorResponse) => {

        })
    }
}
