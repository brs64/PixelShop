import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models/reservation.model';

@Component({
  selector: 'app-reservation',
  standalone: false,
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss'] // Corrected property name
})
export class ReservationComponent implements OnInit {
  @Input() reservation!: Reservation;
  currentReservation!: Reservation;
  reservationId!: string;

  constructor(private reservationService: ReservationService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.reservationId = this.route.snapshot.params['id'];
    if (this.reservationId !== undefined) {
      this.reservationService.getReservationById(+this.reservationId).subscribe((reservation: Reservation) => {
        this.currentReservation = reservation;
      });
    } else {
      this.currentReservation = this.reservation;
    }
  }
}
