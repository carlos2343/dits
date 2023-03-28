import { AuthenticationService } from './../services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FH';

  constructor (
    private router: Router,
    public AuthenticationService: AuthenticationService,
    private Router: Router
  ) { }

  onLoginClick(event: any) {
    this.router.navigate(['/login']);
  }

  logout() {
    this.AuthenticationService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
