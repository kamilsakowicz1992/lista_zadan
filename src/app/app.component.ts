import { Component, OnInit } from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService, private router: Router) {}


     logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
}
