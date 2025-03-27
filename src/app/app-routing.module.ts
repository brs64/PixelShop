import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { jeuComponent } from './jeu/jeu.component';
import { ListJeuxComponent } from './list-jeux/list-jeux.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path: 'catalog',
  component: ListJeuxComponent
  },
  {
    path: 'jeu/:id',
    component: jeuComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
