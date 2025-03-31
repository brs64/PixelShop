import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../models/reservation.model';

@Injectable({
    providedIn: 'root'
})
export class ReservationService {
    constructor(private httpClient: HttpClient) {} // Injecter HttpClient directement

    getReservations(): Observable<Reservation[]> {
        return this.httpClient.get<Reservation[]>('http://localhost:3000/Reservations');
    }

    getReservationById(id: number): Observable<Reservation> {
        return this.httpClient.get<Reservation>(`http://localhost:3000/Reservations/${id}`);
    }

    addReservation(newReservation: Reservation): Observable<Reservation> {
        newReservation.id = Math.floor(Math.random() * 1000);
        return this.getReservations().pipe(
            switchMap(reservations => {
                let maxId = 0;
                reservations.forEach(reservation => { 
                    maxId = (reservation.id > maxId ? reservation.id : maxId); 
                });
                newReservation.id = maxId + 1;
                return this.httpClient.post<Reservation>('http://localhost:3000/Reservations', newReservation);
            })
        );
    }
}