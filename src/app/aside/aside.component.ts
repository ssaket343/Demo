import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  constructor(private router: Router) {}

  navigateToPage(page: string) {
    // Navigate to the specified route when a flex item is clicked
    this.router.navigate([`/${page}`]);
  }
  }

