import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';
import { LanguagesCardComponent } from './languages-card/languages-card.component';
import { ServicesCardComponent } from './services-card/services-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubService } from './services/github.service';
import { Repository } from './card-container/repositories.model';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CardContainerComponent,
    LanguagesCardComponent,
    ServicesCardComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';

  constructor(private ghs: GithubService) {}

  repos: Repository[] = [];

  ngOnInit(): void {
    this.ghs.getUserRepos('MShaw1223').subscribe({
      next: (data: Repository[]) => {
        this.repos = data;
      },
      error: (error) => console.error('Error fetching data:', error),
    });
  }
}
