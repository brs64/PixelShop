import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-list-reservations',
  standalone: false,
  templateUrl: './list-reservations.component.html',
  styleUrls: ['./list-reservations.component.scss']
})
export class ListReservationsComponent implements OnInit {
  listReservations!: Reservation[];

  constructor(public reservationService: ReservationService) { }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe((reservations) => {
      this.listReservations = reservations;
    });
  }
}
