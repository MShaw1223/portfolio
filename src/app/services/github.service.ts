import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../card-container/repositories.model';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private apiUrl = 'https://api.github.com';
  private token = environment.GH_TOKEN;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
  }

  getUserRepos(username: string): Observable<Repository[]> {
    const headers = this.getHeaders();
    return this.http.get<Repository[]>(
      `${this.apiUrl}/users/${username}/repos`,
      { headers }
    );
  }
}
