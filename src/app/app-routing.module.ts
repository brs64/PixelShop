import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { jeuComponent } from './jeu/jeu.component';
import { ListJeuxComponent } from './list-jeux/list-jeux.component';

const routes: Routes = [{
  path: 'catalog',
  component: ListJeuxComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
