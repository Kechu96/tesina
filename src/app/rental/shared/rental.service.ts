import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {
    constructor(private http: HttpClient) { }
    //user petitions
    postRental(rental: Rental): Observable<any> {
        return this.http.post('/api/v1/rentals', rental);
    }
    
}
