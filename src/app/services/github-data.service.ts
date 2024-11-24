import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Repository } from '../card-container/repositories.model';

@Injectable({
  providedIn: 'root',
})
export class GithubDataService {
  private repoSource = new BehaviorSubject<Repository[]>([]);

  repositories$ = this.repoSource.asObservable();

  setRepositories(data: Repository[]): void {
    this.repoSource.next(data);
  }
}
