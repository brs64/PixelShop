import { Component, OnInit } from '@angular/core';
import { JEU } from '../models/jeu.model';
import { JeuxService } from '../services/jeux.service';

@Component({
  selector: 'app-list-jeux',
  standalone: false,
  templateUrl: './list-jeux.component.html',
  styleUrl: './list-jeux.component.scss'
})
export class ListJeuxComponent implements OnInit {
  listJeux!: JEU[];

  constructor(public jeuxService: JeuxService) { }

  ngOnInit(): void {
    this.jeuxService.getJeux().subscribe((jeux) => {
      this.listJeux = jeux;
    });
  }
}
