import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { decryptedToken } from './decryptedToken.model';
import { map } from 'rxjs/operators';
const jwt = new JwtHelperService();
import * as moment from 'moment';
import 'rxjs/Rx';
import { User } from 'src/app/user/shared/user.model';

@Injectable()
export class AuthService{
    private decryptedToken;
    constructor(private http: HttpClient){
        this.decryptedToken = JSON.parse(localStorage.getItem('tesina_meta')) || new decryptedToken();
    }
    private saveToken(token: string): string{
        this.decryptedToken = jwt.decodeToken(token);
        localStorage.setItem('tesina_auth', token);
        localStorage.setItem('tesina_meta', JSON.stringify(this.decryptedToken));
        return token;
    }
    private getExpiration(){
        return moment.unix(this.decryptedToken.exp);
    }
    public logUp(user: User): Observable<any>{
        return this.http.post('/api/v1/users/logUp', user);
    }
    
    public getAuthToken(): string{
        return localStorage.getItem('tesina_auth');
    }
    public ownProfile(id: String): boolean{
        return this.getId() == id;
    }
    public getAuthData(): string{
        return localStorage.getItem('tesina_meta');
    }
    public logIn(userData: any): Observable<any>{
        return this.http.post('/api/v1/users/logIn', userData).pipe(map((token: string) => this.saveToken(token)));
    }
    public logOut() {
        localStorage.removeItem('tesina_auth');
        localStorage.removeItem('tesina_meta');
        this.decryptedToken = new decryptedToken();
    }
    public isAuthenticated(): boolean{
        return moment().isBefore(this.getExpiration());
    }
    public getName(): string{
        return this.decryptedToken.name;
    }
    public getId(): string{
        return this.decryptedToken.userId;
    }
}