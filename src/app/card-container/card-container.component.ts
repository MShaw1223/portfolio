import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repository } from './repositories.model';
import { GithubService } from '../services/github.service';
import { FormsModule } from '@angular/forms';
import { GithubDataService } from '../services/github-data.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-card-container',
  imports: [CommonModule, FormsModule],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css',
})
export class CardContainerComponent {
  repositories: Repository[] = [];
  largeRepositories: Repository[] = [];
  filteredRepositories: Repository[] = [];
  filterOptions = [
    { value: 'all', label: 'All fields' },
    { value: 'language', label: 'Language' },
    { value: 'name', label: 'Name' },
    { value: 'date', label: 'Date Created' },
    { value: 'edit', label: 'Last Edited' },
  ];
  selectedFilter = '';
  searchTerm = '';

  constructor(
    private gitService: GithubService,
    private ghDataService: GithubDataService,
    private langService: LanguageService
  ) {}

  ngOnInit(): void {
    this.gitService.getUserRepos('MShaw1223').subscribe({
      next: (data: Repository[]) => {
        this.repositories = data;
        this.filteredRepositories = data;
        this.ghDataService.setRepositories(data);
      },
      error: (error) => console.error('Error fetching data:', error),
    });
    this.langService.selectedLanguage$.subscribe((language) => {
      if (language) {
        this.selectedFilter = 'language';
        this.searchTerm = language;
        this.applyFilter();
      }
    });
  }

  applyFilter(): void {
    if (!this.selectedFilter || !this.searchTerm) {
      // Reset if no filter or search term
      this.filteredRepositories = this.repositories;
      return;
    }

    this.filteredRepositories = this.repositories.filter((repo) => {
      switch (this.selectedFilter) {
        case 'language':
          return (
            repo.language &&
            repo.language.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        case 'name':
          return (
            repo.name &&
            repo.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        case 'all':
          return (
            (repo.name &&
              repo.name
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase())) ||
            (repo.language &&
              repo.language
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase())) ||
            (repo.description &&
              repo.description
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase()))
          );
        default:
          return false;
      }
    });

    if (this.selectedFilter === 'edit') {
      this.filteredRepositories = [...this.repositories];

      this.filteredRepositories.sort((a, b) => {
        const dateA = new Date(a.pushed_at).getTime();
        const dateB = new Date(b.pushed_at).getTime();
        if (this.searchTerm.toLowerCase() === 'a') {
          return dateA - dateB;
        } else if (this.searchTerm.toLowerCase() === 'd') {
          return dateB - dateA;
        } else {
          return 0;
        }
      });
    }
    if (this.selectedFilter === 'date') {
      this.filteredRepositories = [...this.repositories];
      this.filteredRepositories.sort((a, b) => {
        const bDate = new Date(b.created_at).getTime();
        const aDate = new Date(a.created_at).getTime();
        if (this.searchTerm.toLowerCase() === 'a') {
          return aDate - bDate;
        } else if (this.searchTerm.toLowerCase() === 'd') {
          return bDate - aDate;
        } else {
          return 0;
        }
      });
    }
  }
  clearFilter(): void {
    this.selectedFilter = '';
    this.searchTerm = '';
    this.applyFilter();
  }
}
