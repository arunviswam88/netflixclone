declare var google: any;
import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  authService = inject(AuthService);
  ngOnInit(): void {
      google.accounts.id.initialize({
        client_id:'121943456211-r0b8fm7j9cbcbt44f7vui3ks2bf425c9.apps.googleusercontent.com',
        callback: (res:any) => {
            this.authService.handleToken(res);
        }
      });
      google.accounts.id.renderButton(document.getElementById('google-button'), {
        theme: 'dark',
        size: 'large',
        shape: 'rectangle',
        width: 300
      });
  }
}
