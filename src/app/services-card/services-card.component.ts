import { Component } from '@angular/core';
import { ServicesCard } from './services.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-card',
  imports: [CommonModule],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.css',
})
export class ServicesCardComponent {
  services: ServicesCard[] = [
    { header: 'Hosting', fields: ['Vercel', 'Github Pages', 'NeonDB','Supabase'] },
    { header: 'Frameworks', fields: ['Angular', 'NextJS'] },
    { header: 'Version Control', fields: ['Git', 'Github'] },
    { header: 'Storage', fields: ['SQLite3', 'PostgreSQL', 'MySQL'] },
  ];
}
