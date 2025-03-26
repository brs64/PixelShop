import { Injectable } from '@angular/core';
import { JEU } from '../models/jeu.model';
import { Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JeuxService {
  constructor(public http: HttpClient) { }

  getJeux(): Observable<JEU[]> {
    return this.http.get<JEU[]>('http://localhost:3000/Jeux');
  }

  getJeuById(id: number): Observable<JEU> {
    return this.http.get<JEU>(`http://localhost:3000/Jeux/${id}`);
  }

  addJeu(nouvJeu: JEU): Observable<JEU> {
    nouvJeu.id = Math.floor(Math.random() * 1000);
    return this.getJeux().pipe(
      switchMap(jeux => {
        let maxId = 0;
        jeux.forEach(jeu => { maxId = (jeu.id > maxId ? jeu.id : maxId); });
        nouvJeu.id = maxId + 1;
        return this.http.post<JEU>('http://localhost:3000/Jeux', nouvJeu);
      })
    );
  }
}
