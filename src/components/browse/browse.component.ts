import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  authService = inject(AuthService);

  data = JSON.parse(sessionStorage.getItem("loggedInUser")!);

  name = this.data.name;

  image = this.data.picture;


  signOut() {
    sessionStorage.removeItem("loggedInUser");
    this.authService.signout();
  }
}
