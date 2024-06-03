import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from '../core/header/header.component';
import { BannerComponent } from '../core/banner/banner.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent,BannerComponent],
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
