import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../services/github-data.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-languages-card',
  imports: [CommonModule],
  templateUrl: './languages-card.component.html',
  styleUrl: './languages-card.component.css',
})
export class LanguagesCardComponent implements OnInit {
  languages: Set<string> = new Set();

  constructor(
    private GhDS: GithubDataService,
    private langService: LanguageService
  ) {}

  ngOnInit(): void {
    this.GhDS.repositories$.subscribe((data) => {
      this.languages = new Set(
        data.map((element) => element.language).filter((lang) => lang !== null)
      );
    });
  }

  selectLanguage(language: string) {
    this.langService.setLanguage(language);
  }
}
