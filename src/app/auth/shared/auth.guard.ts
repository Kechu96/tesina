import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

    private url: string;

    constructor(private authService: AuthService, private router: Router){}

    private handleAuthentication(): boolean{
        if(this.loginOrRegisterOrhome()){
            this.router.navigate(['/user/userHome']);
            return false;
        }
        return true;
    }
    private notHandleAuthentication(): boolean{
        if(this.loginOrRegisterOrhome()){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    private loginOrRegisterOrhome(): boolean{
        if(this.url.includes('login') || this.url.includes('register') || this.url.includes('home')){
            return true;
        }
        return false;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        this.url = state.url;
        if(this.authService.isAuthenticated()){
            return this.handleAuthentication();
        }
        return this.notHandleAuthentication();
    }


}