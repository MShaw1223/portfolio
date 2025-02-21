import { Component } from '@angular/core';
import { ServicesCardComponent } from '../services-card/services-card.component';
import { LanguagesCardComponent } from '../languages-card/languages-card.component';
import { CardContainerComponent } from '../card-container/card-container.component';
import { GithubService } from '../services/github.service';
import { Repository } from '../card-container/repositories.model';

@Component({
  selector: 'app-content',
  imports: [
    CardContainerComponent,
    LanguagesCardComponent,
    ServicesCardComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  constructor(private ghs: GithubService) { }

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
