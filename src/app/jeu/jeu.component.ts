import { Component, Input, OnInit } from '@angular/core';
import { JEU } from '../models/jeu.model';
import { ActivatedRoute } from '@angular/router';
import { JeuxService } from '../services/jeux.service';

@Component({
  selector: 'app-jeu', // Ensure the selector is consistent with Angular conventions
  standalone: false,
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.scss'] // Corrected property name
})
export class jeuComponent implements OnInit {
  @Input() Jeu!: JEU;
  theJeu!: JEU;
  idJeu!: string;

  constructor(private JeuService: JeuxService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idJeu = this.route.snapshot.params['id'];
    if (this.idJeu !== undefined) {
      this.JeuService.getJeuById(+this.idJeu).subscribe((Jeu: JEU) => {
        this.theJeu = Jeu;
      });
    } else {
      this.theJeu = this.Jeu;
    }
  }
}