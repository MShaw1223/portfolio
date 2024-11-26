import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private selectedLanguage = new BehaviorSubject('');
  selectedLanguage$ = this.selectedLanguage.asObservable();

  setLanguage(language: string) {
    this.selectedLanguage.next(language);
  }
}
