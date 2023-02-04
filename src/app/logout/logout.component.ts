import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export class LogoutBody {
    user_guid: string;
    auth_token: string;
}

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
    constructor(private readonly auth: AuthService, private readonly router: Router) {}
    body = new LogoutBody();
    has_cleared = false;

    async ngOnInit(): Promise<void> {
        this.body.auth_token = sessionStorage.getItem('auth_token') || '';
        this.body.user_guid = sessionStorage.getItem('user_guid') || '';
        //await this.logout();
    }

    async logout() {
        
        await this.auth
            .logout(this.body)
            .toPromise()
            .then((res) => {
                sessionStorage.clear();
                this.has_cleared = true;
                this.router.navigate(['home'])

            })
            .catch((error: HttpErrorResponse) => {});
    }
}
