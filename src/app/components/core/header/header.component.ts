import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userProfile = input.required<string>();
  userName = input.required<string>();
  newList = ["Home","TV Shows","News & Popular","My List","Browse by Language"];
}
