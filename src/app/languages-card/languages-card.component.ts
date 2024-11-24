import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../card-container/repositories.model';
import { GithubDataService } from '../services/github-data.service';

@Component({
  selector: 'app-languages-card',
  imports: [CommonModule],
  templateUrl: './languages-card.component.html',
  styleUrl: './languages-card.component.css',
})
export class LanguagesCardComponent implements OnInit {
  languages: Set<string> = new Set();

  constructor(private GhDS: GithubDataService) {}

  ngOnInit(): void {
    this.GhDS.repositories$.subscribe((data) => {
      this.languages = new Set(
        data.map((element) => element.language).filter((lang) => lang !== null)
      );
    });
  }
}
