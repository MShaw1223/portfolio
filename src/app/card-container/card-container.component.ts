import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Repository } from './repositories.model';
import { GithubService } from '../services/github.service';
import { FormsModule } from '@angular/forms';
import { GithubDataService } from '../services/github-data.service';

@Component({
  selector: 'app-card-container',
  imports: [CommonModule, FormsModule],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css',
})
export class CardContainerComponent {
  repositories: Repository[] = [];
  filteredRepositories: Repository[] = [];
  filterOptions = [
    { value: 'language', label: 'Language' },
    { value: 'dateCreated', label: 'Date Created' },
    { value: 'name', label: 'Name' },
  ];
  selectedFilter = '';
  searchTerm = '';

  constructor(
    private gitService: GithubService,
    private ghDataService: GithubDataService
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
  }

  applyFilter(): void {
    if (!this.selectedFilter || !this.searchTerm) {
      // Reset if no filter or search term
      this.filteredRepositories = this.repositories;
      return;
    }

    this.filteredRepositories = this.repositories.filter((repo) => {
      if (this.selectedFilter === 'language') {
        return (
          repo.language &&
          repo.language.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      } else if (this.selectedFilter === 'dateCreated') {
        const createdDate = new Date(repo.created_at);
        return (
          createdDate.toISOString().startsWith(this.searchTerm) || // Partial date match
          createdDate
            .toDateString()
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        );
      } else if (this.selectedFilter === 'name') {
        return (
          repo.name &&
          repo.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      }
      return false;
    });
  }
}
