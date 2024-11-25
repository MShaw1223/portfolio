import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';
import { LanguagesCardComponent } from './languages-card/languages-card.component';
import { ServicesCardComponent } from './services-card/services-card.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CardContainerComponent,
    LanguagesCardComponent,
    ServicesCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
