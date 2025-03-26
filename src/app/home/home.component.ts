import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(private router: Router) {}

  goToCatalog() {
    this.router.navigateByUrl('/catalog');
  }
}
