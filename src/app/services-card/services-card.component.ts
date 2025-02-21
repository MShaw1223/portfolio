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
    { header: 'Hosting', fields: ['Vercel', 'Github Pages', 'NeonDB', 'Supabase'] },
    { header: 'Web Frameworks & Backends', fields: ['Angular', 'NextJS', 'Django'] },
    { header: 'Version Control & Repositories', fields: ['Git', 'Github'] },
    { header: 'Databases & Storage', fields: ['SQLite3', 'PostgreSQL', 'MySQL'] },
    { header: 'DevOps Tools', fields: ['Docker', 'Jenkins', 'Ansible', 'Kubernetes'] },
    { header: 'Monitoring', fields: ['Grafana',] },
    { header: 'Cloud Infrastructure', fields: ['Amazon EC2'] },
    { header: 'Operating Systems', fields: ['Linux', 'MacOS'] },
  ];
}
